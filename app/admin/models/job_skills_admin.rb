Trestle.resource(:job_skills) do

  extend Mixins::JobSkills::Table
  # extend Mixins::JobSkills::Form

  menu do
    item(
      @admin.model.display_name(),
      icon: @admin.model.icon_css_class(),
      priority: -97,
    )
  end

  collection do
    model.scope_for_trestle()
  end

  scopes do
    scope(:all, default: true)
    scope(:divine)
    scope(:problems)
  end

end
