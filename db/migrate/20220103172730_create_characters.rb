class CreateCharacters < ActiveRecord::Migration[6.0]
  def change()
    create_table(:characters) do |t|
      t.string(:name, null: false, index: { unique: true })
      t.string(:full_name, null: false, index: { unique: true })
      t.string(:primary_job_name, null: false, index: true)
      t.string(:starting_town_name, null: false, index: true)
      t.string(:native_town_name)
      t.jsonb(:metadata, default: {})
      t.timestamps()
    end
    add_foreign_key(:characters, :jobs,  column: :primary_job_name,   primary_key: :name)
    add_foreign_key(:characters, :towns, column: :starting_town_name, primary_key: :name)
    add_foreign_key(:characters, :towns, column: :native_town_name,   primary_key: :name)
  end
end
