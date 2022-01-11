module Mixins
  module RegionsAdminMixins

    # ==========================================================================
    # Table
    # ==========================================================================
    Table = -> do
      table do
        column(:id)
        column(:name, sort: :name, class: "table-link") do |x|
          link_to(x.display_name, RegionsAdmin.path(:show, id: x.id))
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

        tab(:region) do
        end

      end
    end

  end
end
