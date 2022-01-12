class CreateExamples < ActiveRecord::Migration[6.0]
  def change
    create_table(:examples, id: false) do |t|
      t.primary_key(:name, :string)
      t.string(:description)
      t.jsonb(:metadata, default: {})
      t.timestamps()
    end
  end
end
