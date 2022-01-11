module Mixins
  module Characters
    module Form
      # @param builder [Trestle::Resource::Builder]
      def self.extended(builder)
        builder.instance_eval do
          # @param record [Character]
          form do |record|


          end
        end
      end
    end
  end
end
