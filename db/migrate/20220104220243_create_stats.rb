class CreateStats < ActiveRecord::Migration[6.0]
  def change()
    create_table(:stats) do |t|
      t.string(:name, null: false, index: { unique: true })
      t.string(:description, null: false)
      t.jsonb(:metadata, default: {})
      t.timestamps()
    end
  end
end
