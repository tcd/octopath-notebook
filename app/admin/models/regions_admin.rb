Trestle.resource(:regions) do

  extend Mixins::Shared

  table do
    column(:id)
    column(:name, sort: :name, class: "table-link") do |x|
      link_to(x.display_name, RegionsAdmin.path(:show, id: x.id))
    end
    column(:created_at, align: :center)
    column(:updated_at, align: :center)
  end

end
