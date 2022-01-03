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
        invalid["damage_types"] = self.damage_types()
        invalid["regions"] = self.regions()
        invalid["jobs"] = self.jobs()
        invalid["job_support_skills"] = self.job_support_skills()
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

      # @return [void]
      def self.regions()
        invalid = self.from_fixture("regions.yml", Region) do |fx|
          _args = {
            id:   fx["id"],
            name: fx["name"],
          }
        end
        return invalud
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
            id:         fx["id"],
            name:       fx["name"],
            physical:   fx["physical"],
            elemental:  fx["elemental"],
            game_order: fx["game_order"],
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

    end
  end
end
