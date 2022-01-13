class CreatePartyCharacters < ActiveRecord::Migration[6.0]
  def change()
    create_table(:party_characters) do |t|
      t.belongs_to(:party, foreign_key: true)
      t.belongs_to(:character, foreign_key: true)
      t.jsonb(:metadata, default: {})
      t.timestamps()
    end
    add_index(:party_characters, [:party_id, :character_id], unique: true)
  end
end

# t.integer(:shield_id)
# t.integer(:headgear_id)
# t.integer(:body_armor_id)
# t.integer(:accessory_1_id)
# t.integer(:accessory_2_id)
# t.integer(:sword_id)
# t.integer(:polearm_id)
# t.integer(:dagger_id)
# t.integer(:axe_id)
# t.integer(:bow_id)
# t.integer(:staff_id)
