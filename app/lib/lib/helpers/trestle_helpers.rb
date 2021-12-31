module Lib
  module Helpers
    module TrestleHelpers

      def custom_helper(options)
        options = options.reverse_merge({
          state: 'default',
          heading: nil,
          footer: nil
        })
        content_tag(:div, class: "panel panel-#{options[:state]}") do
          concat(content_tag(:div, class: "panel-heading") { options[:heading] }) if options[:heading]
          concat(content_tag(:div, class: "panel-body") { yield })
          concat(content_tag(:div, class: "panel-footer") { options[:footer] }) if options[:footer]
        end
      end

      def extensible_select(options)
        options = options.reverse_merge({
          state: 'default',
          heading: nil,
          footer: nil
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
