Trestle.resource(:equipment) do

  extend Mixins::Shared

  extend Mixins::Equipment::Table
  # extend Mixins::Equipment::Form

  menu do
    item(
      @admin.model.display_name(),
      icon: @admin.model.icon_css_class(),
      priority: -95,
    )
  end

  scopes do
    scope(:all, default: true)
    scope(:weapons)
    scope(:armor)
  end

  search do |q|
    q ? collection.scope_for_trestle.where("name ILIKE ?", "%#{q}%") : collection
  end

  filters do
    filter(:category, type: :select, choices: EquipmentCategory.pluck(:name))
  end

end
