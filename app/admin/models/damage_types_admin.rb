Trestle.resource(:damage_types) do

  menu do
    item(
      @admin.model.display_name(),
      icon: @admin.model.icon_css_class(),
      priority: :last,
      group: :stats,
    )
  end

  collection do
    model.scope_for_trestle()
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