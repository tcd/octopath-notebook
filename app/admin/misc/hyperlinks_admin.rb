Trestle.resource(:hyperlinks) do

  menu do
    item(
      :links,
      icon: "mdi mdi-link-variant",
      # icon: "fas fa-link",
      group: :configuration,
    )
  end

  collection do
    model.scope_for_trestle
  end

end
