class CreateEquipment < ActiveRecord::Migration[6.0]
  def change()
    create_table(:equipment) do |t|

      t.string(:name, null: false, index: { unique: true })
      t.string(:category_name, null: false, index: true)

      t.integer(:sell_price)

      t.integer(:physical_attack,   null: false, default: 0)
      t.integer(:physical_defense,  null: false, default: 0)
      t.integer(:elemental_attack,  null: false, default: 0)
      t.integer(:elemental_defense, null: false, default: 0)
      t.integer(:max_hp,            null: false, default: 0)
      t.integer(:max_sp,            null: false, default: 0)
      t.integer(:accuracy,          null: false, default: 0)
      t.integer(:speed,             null: false, default: 0)
      t.integer(:critical,          null: false, default: 0)
      t.integer(:evasion,           null: false, default: 0)

      t.string(:other_effects)

      t.jsonb(:metadata, default: {})
      t.timestamps()
    end
    add_foreign_key(:equipment, :equipment_categories, column: :category_name, primary_key: :name)
  end
end
