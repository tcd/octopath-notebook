class CreateDamageTypes < ActiveRecord::Migration[6.0]
  def change
    create_table(:damage_types) do |t|
      t.string(:name, null: false, index: { unique: true })
      t.boolean(:physical, null: false)
      t.boolean(:elemental, null: false)
      t.integer(:game_order, null: false)
      t.jsonb(:metadata, default: {})
      t.timestamps()
    end
  end
end
