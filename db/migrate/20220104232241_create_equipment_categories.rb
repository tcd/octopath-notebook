class CreateEquipmentCategories < ActiveRecord::Migration[6.0]
  def change()
    create_table(:equipment_categories) do |t|
      t.string(:name, null: false, index: { unique: true })
      t.boolean(:weapon, null: false)
      t.jsonb(:metadata, default: {})
      t.timestamps()
    end
  end
end
