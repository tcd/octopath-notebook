module Mixins
  module Jobs
    module Table
      # @param builder [Trestle::Resource::Builder]
      def self.extended(builder)
        builder.instance_eval do
          table do
            column(:id)
            column(:name, sort: :name, link: true, class: "table-link")
            column(:primary)
            column(:secret)
            column(:game_order)
            column(:created_at, align: :center)
            column(:updated_at, align: :center)
          end
        end
      end
    end
  end
end
