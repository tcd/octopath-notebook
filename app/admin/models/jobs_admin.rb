Trestle.resource(:jobs) do

  extend Mixins::Shared

  extend Mixins::Jobs::Table
  extend Mixins::Jobs::Form

  menu do
    item(
      @admin.model.display_name(),
      icon: @admin.model.icon_css_class(),
      priority: -98,
    )
  end

end
