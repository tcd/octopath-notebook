Trestle.resource(:weapon_types) do

  extend Mixins::Shared

  menu do
    item(
      @admin.model.display_name(),
      icon: @admin.model.icon_css_class(),
      priority: :last,
      group: :stats,
    )
  end

end
