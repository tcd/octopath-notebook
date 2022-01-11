Trestle.resource(:equipment) do

  # extend Mixins::Equipment::Table
  # extend Mixins::Equipment::Form

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
