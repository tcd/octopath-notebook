Trestle.resource(:jobs) do

  extend Mixins::Jobs::Table
  extend Mixins::Jobs::Form

  menu do
    item(
      @admin.model.display_name(),
      icon: @admin.model.icon_css_class(),
    )
  end

  collection do
    model.scope_for_trestle
  end

end
