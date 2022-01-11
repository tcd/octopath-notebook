Trestle.resource(:job_skills) do

  extend Mixins::JobSkills::Table
  # extend Mixins::JobSkills::Form

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
