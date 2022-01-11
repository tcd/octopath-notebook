class AddImageFieldToMoreModels < ActiveRecord::Migration[6.0]
  def change()
    add_column(:stats, :encoded_picture, :string)
    add_column(:characters, :encoded_picture, :string)
  end
end
