Trestle.resource(:stats) do

  menu do
    item(
      @admin.model.display_name(),
      icon: @admin.model.icon_css_class(),
      priority: 100,
      group: :stats,
    )
  end

  collection do
    model.scope_for_trestle
  end

  table do
    column(:picture, sort: false, header: false, align: :center) do |record|
      image_tag(record.encoded_picture, style: "") unless record.encoded_picture.blank?
    end
    column(:name, link: true)
    column(:description, truncate: false)
  end

end
