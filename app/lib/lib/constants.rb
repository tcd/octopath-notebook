module Lib
  # Values that won't change.
  module Constants

    # Folder containing data for seeding our database.
    #
    # @return [Pathname]
    SEEDS_FOLDER = Rails.root.join("db", "seed_data")

    # Folder containing test fixtures.
    #
    # @return [Pathname]
    FIXTURES_FOLDER = Rails.root.join("test", "fixtures")

    # Folder containing database backups.
    #
    # @return [Pathname]
    DB_DUMPS_FOLDER = Rails.root.join("db", "dumps")

  end
end
