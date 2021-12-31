module Components
  module LinkList
    class Component < ViewComponent::Base

      # @param hyperlinks [Array<Hyperlink>]
      # @return [void]
      def initialize(hyperlinks:)
        @hyperlinks = hyperlinks
      end

    end
  end
end
