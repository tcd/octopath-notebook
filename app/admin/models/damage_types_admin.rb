Trestle.resource(:damage_types) do

  extend Mixins::Shared

  menu do
    item(
      @admin.model.display_name(),
      icon: @admin.model.icon_css_class(),
      priority: 200,
      group: :stats,
    )
  end

  scopes do
    scope(:all)
    scope(:standard, default: true)
  end

  table do

    column(:picture, sort: false, header: false, align: :center) do |record|
      image_tag(record.encoded_picture, style: "max-width: 40px") unless record.encoded_picture.blank?
    end

    column(:name, link: true)

    column(:physical)
    column(:elemental)
    column(:is_standard, header: "Standard")

  end

end
