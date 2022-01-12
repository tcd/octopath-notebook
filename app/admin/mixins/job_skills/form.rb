module Mixins
  module JobSkills
    module Form
      # @param builder [Trestle::Resource::Builder]
      def self.extended(builder)
        builder.instance_eval do
          # @param record [JobSkill]
          form do |record|

            sidebar do
              row(class: "text-center") do
                col { content_tag(:h1, record.display_name) }
              end
              # row do
              #   col do
              #     form_group(:_, label: false, class: "text-center") do
              #       active_storage_field(:picture, label: false)
              #     end
              #   end
              # end
            end

            tab(:job_skill) do

              row do
                col(md: 6) do
                  static_timestamp(:created_at)
                end
                col(md: 6) do
                  static_timestamp(:updated_at)
                end
              end

            end

            tab(:boost_data) do
              render(Components::JsonCodeBlock::Component.new(data: record.boost_data.as_json))
            end

            tab(:extra_data) do
              render(Components::JsonCodeBlock::Component.new(data: record.boost_data.as_json))
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
