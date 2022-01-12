module Mixins
  # Global settings for all admin classes.
  module Shared
    # @param builder [Trestle::Resource::Builder]
    def self.extended(builder)
      builder.instance_eval do

        remove_action(:destroy)

        menu do
          item(
            @admin.model.display_name(),
            icon: @admin.model.icon_css_class(),
          )
        end

        collection do
          model.scope_for_trestle()
        end

      end
    end
  end
end
