ENV["RAILS_ENV"] ||= "test"

require_relative "../config/environment"
require "rails/test_help"

# require_relative "./support/helpers/simplecov_helper"
# require_relative "./support/helpers/bullet_helper"
# require_relative "./support/helpers/users_helper"

# @abstract
class ActiveSupport::TestCase

  # include BulletHelper
  # include UsersHelper

  # Run tests in parallel with specified workers.
  parallelize(workers: 1)

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  # Read about fixtures at https://api.rubyonrails.org/classes/ActiveRecord/FixtureSet.html
  fixtures(:all)

  # Return the path to a file in `test/support/file_fixtures/`.
  #
  # @param fixture_name [String]
  # @return [Pathname]
  def file_fixture(fixture_name)
    file_fixture_path = Rails.root.join("test", "support", "file_fixtures")
    path = Pathname.new(File.join(file_fixture_path, fixture_name))
    if path.exist?()
      return path
    else
      msg = sprintf("the directory '%s' does not contain a file named '%s'", file_fixture_path, fixture_name)
      raise ArgumentError, msg
    end
  end

  # Read a JSON file in `test/support/file_fixtures/` and return the parsed hash.
  #
  # @param path [String]
  # @param symbolize [Boolean] Whether or not to symbolize keys.
  # @return [Hash]
  def json_file_fixture(path, symbolize: false)
    return JSON.parse(file_fixture(path).read, symbolize_names: symbolize)
  end

  # Helper method for parsing controller responses.
  #
  # @return [Array, Hash]
  def json_response_body()
    @json_response_body ||= JSON.parse(response.body)
  end

  # @return [Hash]
  def gif_file_data()
    return {
      data: "data:image/gif;base64,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",
      filename: "w3c.gif",
    }
  end

  # @param user_id [Number]
  # @param favoritable_type [String]
  # @param favoritable_id [Number]
  def favorite_exists?(user_id, favoritable_type, favoritable_id)
    return ::Favorite.exists?({
      favoritor_id:     user_id,
      favoritable_type: favoritable_type,
      favoritable_id:   favoritable_id,
    })
  end

  # @raise [ArgumentError] unless `want` is Numeric
  # @raise [Lib::Errors::TestError] unless both `@initial_count` and `@model` are defined
  # @param want [Numeric] Expected
  # @param message [String]
  def assert_count_created(want, message = nil)
    raise ArgumentError unless want.is_a?(Numeric)
    raise Lib::Errors::TestError, "'@initial_count` must be defined to use `assert_count_created`" if @initial_count.nil?()
    raise Lib::Errors::TestError, "'@model` must be defined to use `assert_count_created`" if @model.nil?()
    assert_equal(
      (@initial_count + want),
      @model.count(),
      message,
    )
  end

end
