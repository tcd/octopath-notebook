class CreateTowns < ActiveRecord::Migration[6.0]
  def change()
    create_table(:towns) do |t|
      t.string(:name, null: false, index: { unique: true })
      t.string(:region_name, null: false, index: true)
      t.jsonb(:metadata, default: {})
      t.timestamps()
      # t.timestamps(default: -> { 'CURRENT_TIMESTAMP' })
    end
    add_foreign_key(:towns, :regions, column: :region_name, primary_key: :name)
  end
end
