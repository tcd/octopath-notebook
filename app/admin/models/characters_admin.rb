Trestle.resource(:characters) do

  extend Mixins::Shared

  extend Mixins::Characters::Table
  # extend Mixins::Characters::Form

  menu do
    item(
      @admin.model.display_name(),
      icon: @admin.model.icon_css_class(),
      priority: -99,
    )
  end

end
