module Components
  module Link
    class Component < ViewComponent::Base

      # @param url [String]
      # @return [void]
      def initialize(url:)
        @url = url
      end

    end
  end
end
