module Lib
  module Helpers
    # Helpers for HTML in Trestle views
    module TrestleHelpers

      include Trestle::TimestampHelper

      # @param attribute [Symbol]
      # @return [String]
      def static_timestamp(attribute, options = {})

        options.reverse_merge!({
          heading: attribute.to_s.titleize,
        })

        value = form.object.send(attribute)
        unless value.is_a?(ActiveSupport::TimeWithZone)
          raise ArgumentError, "attribute must be a datetime, is a #{value&.class}"
        end

        content_tag(:div, class: "form-control-static") do
          concat(content_tag(:span, options[:heading], class: "static-form-label"))
          concat(content_tag(:div, class: "d-flex justify-content-start") do
            concat(content_tag(:div, class: "text-center") do
              concat(timestamp(value, options))
            end)
          end)
        end

      end

      # Example from trestle docs
      def custom_helper(options)
        options = options.reverse_merge({
          state: 'default',
          heading: nil,
          footer: nil,
        })
        content_tag(:div, class: "panel panel-#{options[:state]}") do
          concat(content_tag(:div, class: "panel-heading") { options[:heading] }) if options[:heading]
          concat(content_tag(:div, class: "panel-body") { yield })
          concat(content_tag(:div, class: "panel-footer") { options[:footer] }) if options[:footer]
        end
      end

    end
  end
end
