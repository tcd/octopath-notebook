module Mixins
  module Jobs
    module Table
      # @param builder [Trestle::Resource::Builder]
      def self.extended(builder)
        builder.instance_eval do
          table do

            # column(:id)

            column(:picture, sort: false, header: false, align: :center) do |record|
              image_tag(record.encoded_picture, style: "") unless record.encoded_picture.blank?
            end

            column(:name, sort: :name, link: true, class: "table-link")

            column(:primary)
            column(:secret)

            # column(:game_order)

            # TODO: replace with `job_equipment_categories
            column(:weapons, format: :tags, class: "hidden-xs") do |record|
              record.equipment_categories.map(&:display_name)
            end

            column(:created_at, align: :center)
            column(:updated_at, align: :center)

          end
        end
      end
    end
  end
end
