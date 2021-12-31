module Components
  module FancyList
    class Component < ViewComponent::Base

      include Trestle::Engine.routes.url_helpers

      # @param items [Array]
      # @return [void]
      def initialize(items:)
        @items = items
      end

      # def main_app()
      #   Rails.application.class.routes.url_helpers
      # end

      # # @param star [Star]
      # # @return [String]
      # def star_link(star)
      #   return stars_admin_path(star)
      # end

    end
  end
end
