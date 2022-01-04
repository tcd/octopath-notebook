module Mixins
  module JobSupportSkillsMixins

    # ==========================================================================
    # Table
    # ==========================================================================
    Table = -> do
      table do
        column(:id)
        column(:name, sort: :name, class: "table-link") do |x|
          link_to(x.display_name, JobSupportSkillsAdmin.path(:show, id: x.id))
        end
        column(:created_at, align: :center)
        column(:updated_at, align: :center)
      end
    end

    # ==========================================================================
    # Form
    # ==========================================================================
    Form = -> do
      # @param job_support_skill [JobSupportSkill]
      form do |job_support_skill|

        tab(:job_support_skill) do
        end

      end
    end

  end
end
