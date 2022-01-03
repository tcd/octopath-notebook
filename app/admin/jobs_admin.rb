Trestle.resource(:jobs) do

  instance_exec(&Mixins::JobsAdminMixins::Table)
  # instance_exec(&Mixins::JobsAdminMixins::Form)

  menu do
    item(
      @admin.model.display_name(),
      icon: @admin.model.icon_css_class(),
      group: :configuration,
    )
  end

  collection do
    model.scope_for_trestle
  end

end
