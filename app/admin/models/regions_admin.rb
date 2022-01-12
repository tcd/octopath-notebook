Trestle.resource(:regions) do

  extend Mixins::Shared

  menu do
    item(
      @admin.model.display_name(),
      icon: @admin.model.icon_css_class(),
    )
  end

  collection do
    model.scope_for_trestle
  end

  table do
    column(:id)
    column(:name, sort: :name, class: "table-link") do |x|
      link_to(x.display_name, RegionsAdmin.path(:show, id: x.id))
    end
    column(:created_at, align: :center)
    column(:updated_at, align: :center)
  end

end
