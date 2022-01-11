module Mixins
  module CharactersAdminMixins

    # ==========================================================================
    # Table
    # ==========================================================================
    Table = -> do
      table do
        column(:id)
        column(:name, sort: :name, class: "table-link") do |x|
          link_to(x.display_name, CharactersAdmin.path(:show, id: x.id))
        end
        column(:primary_job, sort: :primary_job_name, class: "table-link") do |x|
          link_to(x.primary_job.display_name, JobsAdmin.path(:show, id: x.primary_job.id))
        end
        column(:created_at, align: :center)
        column(:updated_at, align: :center)
      end
    end

    # ==========================================================================
    # Form
    # ==========================================================================
    Form = -> do
      # @param record [Character]
      form do |record|

        tab(:character) do
        end

      end
    end

  end
end
