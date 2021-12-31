if defined?(ActsAsTaggableOn)
  module OctopathNotebook
    class Application < Rails::Application
      # https://github.com/mbleigh/acts-as-taggable-on#configuration
      ActsAsTaggableOn.remove_unused_tags = true
      ActsAsTaggableOn.force_lowercase = true
      ActsAsTaggableOn.strict_case_match = true
      # ActsAsTaggableOn.tags_table = "aato_tags"
      # ActsAsTaggableOn.taggings_table = "aato_taggings"
    end
  end
end
