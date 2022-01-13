Trestle.resource(:examples) do

  # extend Mixins::Shared

  table do
    column :name
    column :description
    column :metadata
    column :created_at, align: :center
    column :updated, align: :center
    actions
  end

  form do |example|
    text_field :name
    text_field :description

    row do
      col { text_field :metadata }
    end

    row do
      col { datetime_field :updated_at }
      col { datetime_field :created_at }
    end
  end

  # By default, all parameters passed to the update and create actions will be
  # permitted. If you do not have full trust in your users, you should explicitly
  # define the list of permitted parameters.
  #
  # For further information, see the Rails documentation on Strong Parameters:
  #   http://guides.rubyonrails.org/action_controller_overview.html#strong-parameters
  #
  # params do |params|
  #   params.require(:example).permit(:name, ...)
  # end
end
