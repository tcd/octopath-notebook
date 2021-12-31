# app/models/concerns/jsonb_type_value.rb

module Lib
  # Attribute type for allowing Rails' parameters to be assigned to a JSONB column and property decoded/encoded
  # Use like so:
  #  class SomeModel
  #    attribute :internal_test_options, JsonbTypeValue.new
  #  end
  class JsonbTypeValue < ActiveModel::Type::Value
    # @return [Symbol]
    def type()
      :jsonb
    end

    # @param value [String,Hash]
    # @return [String,Hash,nil]
    def cast_value(value)
      case value
      when String
        ActiveSupport::JSON.decode(value) rescue nil
      when Hash
        value
      end
    end

    # @param value [Object]
    # @return []
    def serialize(value)
      case value
      when Hash
        ActiveSupport::JSON.encode(value)
      else
        super
      end
    end

    # @return [String,Hash,nil]
    def changed_in_place?(raw_old_value, new_value)
      cast_value(raw_old_value) != new_value
    end
  end
end
