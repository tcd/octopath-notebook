class AddIsStandardToDamageTypes < ActiveRecord::Migration[6.0]
  def change()
    add_column(:damage_types, :is_standard, :boolean, null: false, default: false)
  end
end
