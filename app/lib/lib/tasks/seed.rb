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
        invalid["jobs"] = self.jobs()
        invalid["regions"] = self.regions()
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
          pb.increment()
          pb.newline()
          pp(args)
          puts(e)
          pb.newline()
        end
        return nil
      end

      # @return [void]
      def self.regions()
        self.from_tsv("regions.tsv", Region) do |fx|
          _args = {
            id:   fx["id"],
            name: fx["name"],
          }
        end
        return nil
      end

      # @return [void]
      def self.jobs()
        self.from_tsv("jobs.tsv", Job) do |fx|
          _args = {
            id:         fx["id"],
            name:       fx["name"],
            primary:    fx["primary"],
            secret:     fx["secret"],
            game_order: fx["secret"],
          }
        end
        return nil
      end

    end
  end
end
