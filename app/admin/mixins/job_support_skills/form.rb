module Mixins
  module JobSupportSkills
    module Form
      # @param builder [Trestle::Resource::Builder]
      def self.extended(builder)
        builder.instance_eval do
          # @param record [JobSupportSkill]
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

            tab(:job_support_skill) do

              row do
                col(md: 6) do
                  static_timestamp(:created_at)
                end
                col(md: 6) do
                  static_timestamp(:updated_at)
                end
              end

            end

          end
        end
      end
    end
  end
end
