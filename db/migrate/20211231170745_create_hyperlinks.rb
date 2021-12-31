class CreateHyperlinks < ActiveRecord::Migration[6.0]
  def change()
    create_table(:hyperlinks) do |t|
      t.string(:title)
      t.string(:url, null: false, index: { unique: true })
      t.string(:website_name)
      t.string(:description)
      t.integer(:sort_order, default: 1000)
      t.jsonb(:metadata, default: {})
      t.references(:linkable, polymorphic: true)
      t.timestamps()
    end
  end
end
