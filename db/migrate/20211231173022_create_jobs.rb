class CreateJobs < ActiveRecord::Migration[6.0]
  def change()
    create_table(:jobs) do |t|
      t.string(:name, null: false, index: { unique: true })
      t.boolean(:primary, null: false)
      t.boolean(:secret, null: false)
      t.integer(:game_order, null: false)
      t.jsonb(:metadata, default: {})
      t.timestamps()
    end
  end
end
