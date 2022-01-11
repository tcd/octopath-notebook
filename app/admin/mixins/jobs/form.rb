module Mixins
  module Jobs
    module Form
      # @param builder [Trestle::Resource::Builder]
      def self.extended(builder)
        builder.instance_eval do
          # @param record [Job]
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

            tab(:job) do

              row do
                col(md: 6) do
                  static_field(:name)
                end
              end

              row do
                col(md: 6) do
                  form_group(class: "required") do
                    static_field(:primary)
                  end
                end
                col(md: 6) do
                  form_group(class: "required") do
                    static_field(:secret)
                  end
                end
              end

              row do
                col(md: 6) do
                  form_group(class: "required") do
                    static_field(:game_order)
                  end
                end
              end

              row do
                col(md: 6) do
                  static_timestamp(:created_at)
                end
                col(md: 6) do
                  static_timestamp(:updated_at)
                end
              end

            end

            tab(:skills, badge: record.job_skills.count) do
              table(JobSkillsAdmin.table, collection: record.job_skills)
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
