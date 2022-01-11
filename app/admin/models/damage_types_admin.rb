Trestle.resource(:damage_types) do

  menu do
    item(
      @admin.model.display_name(),
      icon: @admin.model.icon_css_class(),
      priority: :last,
    )
  end

  collection do
    model.scope_for_trestle()
  end

end
