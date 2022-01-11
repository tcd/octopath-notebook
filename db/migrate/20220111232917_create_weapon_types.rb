class CreateWeaponTypes < ActiveRecord::Migration[6.0]
  def change
    create_table(:weapon_types) do |t|
      t.string(:singular_name, null: false, index: { unique: true })
      t.string(:plural_name, null: false, index: { unique: true })
      t.string(:encoded_picture)
      t.timestamps()
    end
  end
end
