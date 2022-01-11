module Mixins
  module Characters
    module Form
      # @param builder [Trestle::Resource::Builder]
      def self.extended(builder)
        builder.instance_eval do
          # @param record [Character]
          form do |record|

            sidebar do
              row(class: "text-center") do
                col { content_tag(:h1, record.display_name) }
              end
              row(class: "text-center") do
                col do
                  image_tag(record.encoded_picture, style: "") unless record.encoded_picture.blank?
                end
              end
            end

            tab(:character) do

              row do
                col(md: 6) do
                  static_timestamp(:created_at)
                end
                col(md: 6) do
                  static_timestamp(:updated_at)
                end
              end

            end

            tab(:raw_data) do
              render(Components::JsonCodeBlock::Component.new(data: record.as_json))
            end

          end
        end
      end
    end
  end
end
