class CreateParties < ActiveRecord::Migration[6.0]
  def change()
    create_table(:parties) do |t|
      t.string(:name, null: false, index: { unique: true })
      t.string(:description)
      t.string(:notes)
      t.jsonb(:metadata, default: {})
      t.timestamps()
    end
  end
end
