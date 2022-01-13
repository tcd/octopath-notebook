Trestle.resource(:job_support_skills) do

  extend Mixins::Shared

  extend Mixins::JobSupportSkills::Table
  # extend Mixins::JobSupportSkills::Form

  menu do
    item(
      @admin.model.display_name(),
      icon: @admin.model.icon_css_class(),
      priority: -96,
    )
  end

  scopes do
    scope(:all, default: true)
    scope(:one_per_party)
  end

end
