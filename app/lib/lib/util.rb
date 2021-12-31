module Lib
  # Utility functions for use throughout the app.
  module Util

    MINUTES_PATTERN = /(?<minutes>\d+)\s*minutes/i.freeze()

    # @param params [Array<Symbol>]
    # @return [Object]
    def self.get_credential(*params)
      return Rails.application.credentials.dig(Rails.env.to_sym, *params)
    end

    # Write out data to a JSON file in `ActiveStorage::Blob` for the current `Rails.env`.
    # Prepends a unique timestamp to the filename.
    #
    # @param data [Object]
    # @param name [String]
    # @return [String]
    def self.save_to_file(data, name, add_timestamp: true)
      base_name = File.basename(name)
      file_name = base_name
      if add_timestamp
        file_name = "#{Time.zone.now.to_i}.#{base_name}"
      end
      name.gsub!(base_name, file_name)
      path = Rails.root.join("storage", "saved_files", name)
      FileUtils.mkdir_p(path.parent)
      File.open(path, "a") { |f| f.write(data) }
      # File.write(path, data, mode: "a")
      return path.to_s
    end

    # Attempt to convert a string to a media timestamp (ex: `"hh:mm:ss"``)
    #
    # @param string [String] The string to convert.
    # @return [String]
    def self.to_media_timestamp(string)
      if (matches = string.match(MINUTES_PATTERN))
        min = matches[:minuges].rjust(2, "0")  # => '05'
        return "#{min}:00"
      end
      return string
    end

    # @param code_object [YARD::CodeObjects::Base]
    # @param tag_name [String]
    # @return [Yard::Tags::Tag]
    def self.find_tag(code_object, tag_name)
      return code_object&.tags&.find { |x| x.tag_name == tag_name } || nil
    end

    # @param code_object [YARD::CodeObjects::Base]
    # @param tag_name [String]
    # @return [Array<Yard::Tags::Tag>]
    def self.find_tags(code_object, tag_name)
      return code_object&.tags&.filter { |x| x.tag_name == tag_name } || nil
    end

  end
end
