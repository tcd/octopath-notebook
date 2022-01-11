class AddWeaponsToJobs < ActiveRecord::Migration[6.0]
  def change()
    add_column(:jobs, :weapons, :string, array: true, null: false, default: [])
  end
end
