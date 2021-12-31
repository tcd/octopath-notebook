class CreateJobSupportSkills < ActiveRecord::Migration[6.0]
  def change
    create_table(:job_support_skills) do |t|
      t.string(:name, null: false, index: { unique: true })
      t.string(:job_name, null: false, index: true)
      t.integer(:unlock_order, null: false)
      t.boolean(:one_per_party, null: false)
      t.string(:short_description, null: false)
      t.string(:in_game_description, null: false)
      t.string(:notes)
      t.jsonb(:metadata, default: {})
      t.timestamps()
    end
    add_foreign_key(:job_support_skills, :jobs, column: :job_name, primary_key: :name)
  end
end
