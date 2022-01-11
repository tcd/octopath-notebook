class AddImageFieldsToModels < ActiveRecord::Migration[6.0]
  def change()
    add_column(:jobs, :encoded_picture, :string)
    add_column(:damage_types, :encoded_picture, :string)
    add_column(:equipment_categories, :encoded_picture, :string)
  end
end
