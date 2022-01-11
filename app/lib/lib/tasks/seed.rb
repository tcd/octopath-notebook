module Lib
  module Tasks
    # Code for seeding data
    class Seed

      # @return [Pathname]
      def self.seeds_folder()
        return Rails.root.join("db", "seed_data")
      end

      # @return [Pathname]
      def self.fixtures_folder()
        return Rails.root.join("test", "fixtures")
      end

      # @return [Hash]
      def self.all()
        invalid = {}
        invalid["stats"] = self.stats()
        invalid["damage_types"] = self.damage_types()
        invalid["equipment_categories"] = self.equipment_categories()
        invalid["equipment"] = self.equipment()
        invalid["regions"] = self.regions()
        invalid["towns"] = self.towns()
        invalid["jobs"] = self.jobs()
        invalid["characters"] = self.characters()
        invalid["job_support_skills"] = self.job_support_skills()
        invalid["job_skills"] = self.job_skills()
        invalid["job_stat_bonuses"] = self.job_stat_bonuses()
        return invalid
      end

      # @param file_name [String] Name of the TSV file with data to import.
      # @param model_class [Class] ActiveRecord model to create.
      #
      # @yieldparam [Hash] cells from one row of the file
      # @yieldreturn [Hash] arguments for creating the model instance from the row
      #
      # @return [Array<Hash>]
      def self.from_tsv(file_name, model_class)
        path = self.seeds_folder.join(file_name)
        rows = Lib::FlatFile::Tsv.from_file(path)
        pb = Lib::ProgressBar.new(rows.length, title: "seeding #{model_class.name} data")
        rows.each do |row|
          args = yield(row)
          args.compact!()
          model = model_class.new(args)
          model.save!()
          pb.increment()
        rescue StandardError => e
          pb.increment()
          pb.newline()
          pp(args)
          puts(e)
          pb.newline()
        end
        return nil
      end

      # @param file_name [String] Name of the TSV file with data to import.
      # @param model_class [Class] ActiveRecord model to create.
      #
      # @yieldparam [Hash] one fixture from the file
      # @yieldreturn [Hash] arguments for creating the model instance from the fixture
      #
      # @return [Array<Hash>]
      def self.from_fixture(file_name, model_class)
        invalid = []
        path = self.fixtures_folder.join(file_name)
        yaml_data = ERB.new(path.read).result
        fixture_data = YAML.load(yaml_data)
        pb = Lib::ProgressBar.new(fixture_data.length, title: "seeding #{model_class.name} data")
        fixture_data.each do |fixture|
          fx = fixture[1]
          args = yield(fx)
          args.compact!()
          model = model_class.new(args)
          model.save!()
          pb.increment()
        rescue StandardError => e
          invalid << {
            args:  args,
            error: e,
          }
          pb.increment()
          pb.newline()
          pp(args)
          puts(e)
          pb.newline()
        end
        return invalid
      end

      # @param file_name [String] Name of the JSON file with data to import.
      # @param model_class [Class] ActiveRecord model to create.
      #
      # @yieldparam [Hash] one fixture from the file
      # @yieldreturn [Hash] arguments for creating the model instance from the fixture
      #
      # @return [Array<Hash>]
      def self.from_json(file_name, model_class)
        invalid = []
        path = self.seeds_folder.join(file_name)
        data = Lib::FlatFile::Json.from_file(path)
        pb = Lib::ProgressBar.new(data.length, title: "seeding #{model_class.name} data")
        data.each do |x|
          args = yield(x)
          args.compact!()
          model = model_class.new(args)
          model.save!()
          pb.increment()
        rescue StandardError => e
          invalid << {
            args:  args,
            error: e,
          }
          pb.increment()
          pb.newline()
          pp(args)
          puts(e)
          pb.newline()
        end
        return invalid
      end

      # @return [void]
      def self.stats()
        invalid = self.from_fixture("stats.yml", Stat) do |fx|
          _args = {
            id:          fx["id"],
            name:        fx["name"],
            full_name:   fx["full_name"],
            description: fx["description"],
          }
        end
        if invalid.blank?
          assets = Lib::FlatFile::Json.from_file(Rails.root.join("db", "seed_data", "assets.json"))
          assets["Stats"].each do |name, image|
            record = Stat.find_by(name: name)
            next unless record
            record.update!(encoded_picture: image)
          end
        end
        return invalid
      end

      # @return [void]
      def self.equipment_categories()
        invalid = self.from_fixture("equipment_categories.yml", EquipmentCategory) do |fx|
          _args = {
            id:     fx["id"],
            name:   fx["name"],
            weapon: fx["weapon"],
          }
        end
        return invalid
      end

      # @return [void]
      def self.regions()
        invalid = self.from_fixture("regions.yml", Region) do |fx|
          _args = {
            id:   fx["id"],
            name: fx["name"],
          }
        end
        return invalid
      end

      # @return [void]
      def self.towns()
        invalid = self.from_fixture("towns.yml", Town) do |fx|
          _args = {
            id:          fx["id"],
            name:        fx["name"],
            region_name: fx["region_name"],
          }
        end
        return invalid
      end

      # @return [void]
      def self.jobs()
        invalid = self.from_fixture("jobs.yml", Job) do |fx|
          _args = {
            id:         fx["id"],
            name:       fx["name"],
            primary:    fx["primary"],
            secret:     fx["secret"],
            game_order: fx["game_order"],
          }
        end
        return invalid
      end

      # @return [void]
      def self.damage_types()
        invalid = self.from_fixture("damage_types.yml", DamageType) do |fx|
          _args = {
            id:          fx["id"],
            name:        fx["name"],
            is_standard: fx["is_standard"],
            physical:    fx["physical"],
            elemental:   fx["elemental"],
            game_order:  fx["game_order"],
          }
        end
        return invalid
      end

      # @return [void]
      def self.job_support_skills()
        invalid = self.from_fixture("job_support_skills.yml", JobSupportSkill) do |fx|
          _args = {
            id:                  fx["id"],
            job_name:            fx["job_name"],
            name:                fx["name"],
            unlock_order:        fx["unlock_order"],
            one_per_party:       fx["one_per_party"],
            short_description:   fx["short_description"],
            in_game_description: fx["in_game_description"],
            notes:               fx["notes"],
          }
        end
        return invalid
      end

      # @return [void]
      def self.characters()
        invalid = self.from_fixture("characters.yml", Character) do |fx|
          _args = {
            id:                 fx["id"],
            name:               fx["name"],
            full_name:          fx["full_name"],
            primary_job_name:   fx["primary_job_name"],
            starting_town_name: fx["starting_town_name"],
            native_town_name:   fx["native_town_name"],
          }
        end
        return invalid
      end

      # @return [void]
      def self.equipment()
        invalid = self.from_tsv("Equipment.tsv", Equipment) do |fx|
          _args = {
            id:                fx["id"],
            name:              fx["name"],
            category_name:     fx["category_name"],
            sell_price:        fx["sell_price"],
            physical_attack:   fx["physical_attack"],
            physical_defense:  fx["physical_defense"],
            elemental_attack:  fx["elemental_attack"],
            elemental_defense: fx["elemental_defense"],
            max_hp:            fx["max_hp"],
            max_sp:            fx["max_sp"],
            accuracy:          fx["accuracy"],
            speed:             fx["speed"],
            critical:          fx["critical"],
            evasion:           fx["evasion"],
            other_effects:     fx["other_effects"],
          }
        end
        return invalid
      end

      # @return [void]
      def self.job_skills()
        invalid = self.from_json("JobSkills.json", JobSkill) do |fx|
          _args = {
            id:                  fx["original_order"],
            name:                fx["name"],
            job_name:            fx["job_name"],
            job_order:           fx["job_order"],
            divine_skill:        fx["divine_skill"],
            in_game_description: fx["in_game_description"],
            sp_cost:             fx["sp_cost"],
            effect_type:         fx["effect_type"],
            target:              fx["target"],
            notes:               fx["notes"],
            invocation_ratio:    fx["invocation_ratio"],
            defense_modifier:    fx["defense_modifier"],
            extra_data:          fx["extra_data"],
            boost_data:          fx["boost_data"],
          }
        end
        return invalid
      end

      # @return [void]
      def self.job_stat_bonuses()
        jobs  = Job.select(:name, :id)
        stats = Stat.select(:full_name, :id)
        invalid = self.from_json("JobStatBonuses.json", JobStatBonus) do |fx|
          job_id  = jobs.find  { |x| x.name == fx["job"] }.id
          stat_id = stats.find { |x| x.full_name == fx["stat"] }.id
          _args = {
            value: fx["value"],
            job_id: job_id,
            stat_id: stat_id,
          }
        end
        return invalid
      end

    end
  end
end
