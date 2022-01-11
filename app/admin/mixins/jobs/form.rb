module Mixins
  module Jobs
    module Form
      # @param builder [Trestle::Resource::Builder]
      def self.extended(builder)
        builder.instance_eval do
          # @param record [Character]
          form do |_record|

            sidebar do
              row(class: "text-center") do
                col { content_tag(:h1, instance.display_name) }
              end
              # row do
              #   col do
              #     form_group(:_, label: false, class: "text-center") do
              #       active_storage_field(:picture, label: false)
              #     end
              #   end
              # end
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

          end
        end
      end
    end
  end
end
