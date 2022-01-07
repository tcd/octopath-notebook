Trestle.resource(:equipment) do

  # instance_exec(&Mixins::EquipmentAdminMixins::Table)
  # instance_exec(&Mixins::EquipmentAdminMixins::Form)

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
