module Mixins
  # Global settings for all admin classes.
  module Shared
    # @param builder [Trestle::Resource::Builder]
    def self.extended(builder)
      builder.instance_eval do

        remove_action(:destroy)

        menu do
          item(
            @admin.model.display_name(),
            icon: @admin.model.icon_css_class(),
          )
        end

        collection do
          model.scope_for_trestle()
        end

        # By default, all parameters passed to the update and create actions will be
        # permitted. If you do not have full trust in your users, you should explicitly
        # define the list of permitted parameters.
        #
        # For further information, see the Rails documentation on Strong Parameters:
        #   http://guides.rubyonrails.org/action_controller_overview.html#strong-parameters
        #
        # params do |params|
        #   v0 = [
        #     :created_at,
        #     :updated_at,
        #     :metadata,
        #   ]
        #   v1 = params.as_json.with_indifferent_access.dig(model.custom_instance_name).keys.map(&:to_sym)
        #   v2 = v1.filter { |x| v0.include?(x) }.map(&:to_s)
        #   params.require(model.custom_instance_name).permit(:name, :metadata, :created_at, :updated_at)
        # end

        # controller do
        #   def create()
        #     binding.pry
        #     super()
        #   end
        # end

      end
    end
  end
end
