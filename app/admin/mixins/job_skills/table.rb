module Mixins
  module JobSkills
    module Table
      # @param builder [Trestle::Resource::Builder]
      def self.extended(builder)
        builder.instance_eval do
          table do

            # column(:id)

            column(:name, link: true)
            column(:job, sort: :job_name, link: true)

            column(:divine_skill, header: "Divine")
            column(:target)
            column(:effect_type)
            column(:sp_cost, header: "SP Cost")

            column(:created_at, align: :center)
            column(:updated_at, align: :center)

          end
        end
      end
    end
  end
end
