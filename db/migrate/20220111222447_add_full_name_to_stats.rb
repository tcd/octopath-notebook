class AddFullNameToStats < ActiveRecord::Migration[6.0]
  def change()
    add_column(:stats, :full_name, :string, null: false, index: { unique: true })
  end
end
