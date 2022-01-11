module Mixins
  module BaseAdminMixins

    Defaults = -> do

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
