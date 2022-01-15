Trestle.resource(:party_characters) do

  extend Mixins::Shared

  menu do
    item(
      @admin.model.display_name(),
      icon: @admin.model.icon_css_class(),
      priority: 300,
      group: :stats,
    )
  end

  form(dialog: true, exclude: [:created_at, :updated_at, :metadata])

end
