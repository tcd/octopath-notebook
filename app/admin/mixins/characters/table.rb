module Mixins
  module Characters
    module Table
      # @param builder [Trestle::Resource::Builder]
      def self.extended(builder)
        builder.instance_eval do
          table do

            column(:id)

            column(:name, link: true)
            column(:primary_job, sort: :primary_job_name, link: true)

            column(:created_at, align: :center)
            column(:updated_at, align: :center)

          end
        end
      end
    end
  end
end
