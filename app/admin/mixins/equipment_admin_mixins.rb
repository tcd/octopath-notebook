module Mixins
  module EquipmentAdminMixins

    # ==========================================================================
    # Table
    # ==========================================================================
    Table = -> do
      table do
        column(:id)
        column(:name, sort: :name, class: "table-link") do |x|
          link_to(x.display_name, EquipmentAdmin.path(:show, id: x.id))
        end
        column(:category, sort: :category_name, class: "table-link") do |x|
          link_to(x.category_name, EquipmentCategoriesAdmin.path(:show, id: x.equipment_category.id))
        end
        column(:created_at, align: :center)
        column(:updated_at, align: :center)
      end
    end

    # ==========================================================================
    # Form
    # ==========================================================================
    Form = -> do
      # @param record [Region]
      form do |record|

        tab(:equipment) do
        end

      end
    end

  end
end
