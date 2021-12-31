module Lib
  module AatoHelper

    # include ActsAsTaggableOn::TagsHelper

    # @return [Arrah<Hash>]
    def self.tags_for_select2()
      return ActsAsTaggableOn::Tag.all.map(&:name)
    end

  end
end
