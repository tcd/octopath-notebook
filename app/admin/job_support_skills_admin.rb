Trestle.resource(:job_support_skills) do

  # instance_exec(&Mixins::JobSupportSkillsAdminMixins::Table)

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
