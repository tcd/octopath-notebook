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
      # @param job [Job]
      form do |job|

        tab(:job) do

          row do
            col(md: 6) do
              form_group(class: "required") do
                text_field(:name)
              end
            end
          end

          row do
            col(md: 6) do
              form_group(class: "required") do
                check_box(:primary)
              end
            end
            col(md: 6) do
              form_group(class: "required") do
                check_box(:secret)
              end
            end
          end

        end

      end
    end

  end
end
