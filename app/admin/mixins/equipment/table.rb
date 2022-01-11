module Mixins
  module Equipment
    module Table
      # @param builder [Trestle::Resource::Builder]
      def self.extended(builder)
        builder.instance_eval do
          table do

            # column(:id)

            column(:name, sort: :name, link: true, class: "table-link")
            column(:category, sort: :category_name, link: true, class: "table-link")

            column(:physical_attack)
            column(:physical_defense)
            column(:elemental_attack)
            column(:elemental_defense)
            column(:max_hp)
            column(:max_sp)
            column(:accuracy)
            column(:speed)
            column(:critical)
            column(:evasion)

            # column(:created_at, align: :center)
            # column(:updated_at, align: :center)

          end
        end
      end
    end
  end
end

# "category_name"
# "name"
# "sell_price"
# "other_effects"
