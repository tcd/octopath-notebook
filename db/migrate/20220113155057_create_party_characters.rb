class CreatePartyCharacters < ActiveRecord::Migration[6.0]
  def change()

    create_table(:party_characters) do |t|

      t.belongs_to(:party, foreign_key: true)
      t.belongs_to(:character, foreign_key: true)

      t.integer(:secondary_job_id)

      t.string(:name, null: false)
      t.string(:description)
      t.string(:notes)

      t.integer(:shield_id)
      t.integer(:headgear_id)
      t.integer(:body_armor_id)
      t.integer(:accessory_1_id)
      t.integer(:accessory_2_id)
      t.integer(:sword_id)
      t.integer(:polearm_id)
      t.integer(:dagger_id)
      t.integer(:axe_id)
      t.integer(:bow_id)
      t.integer(:staff_id)

      t.jsonb(:metadata, default: {})
      t.timestamps()

    end

    add_foreign_key(:party_characters, :jobs, column: :secondary_job_id)

    add_foreign_key(:party_characters, :equipment, column: :shield_id)
    add_foreign_key(:party_characters, :equipment, column: :headgear_id)
    add_foreign_key(:party_characters, :equipment, column: :body_armor_id)
    add_foreign_key(:party_characters, :equipment, column: :accessory_1_id)
    add_foreign_key(:party_characters, :equipment, column: :accessory_2_id)
    add_foreign_key(:party_characters, :equipment, column: :sword_id)
    add_foreign_key(:party_characters, :equipment, column: :polearm_id)
    add_foreign_key(:party_characters, :equipment, column: :dagger_id)
    add_foreign_key(:party_characters, :equipment, column: :axe_id)
    add_foreign_key(:party_characters, :equipment, column: :bow_id)
    add_foreign_key(:party_characters, :equipment, column: :staff_id)

    add_index(:party_characters, [:party_id, :character_id],     unique: true)
    add_index(:party_characters, [:party_id, :secondary_job_id], unique: true)

  end
end
