Trestle.resource(:parties) do

  extend Mixins::Shared

  menu do
    item(
      @admin.model.display_name(),
      icon: @admin.model.icon_css_class(),
      priority: -101,
    )
  end

end
