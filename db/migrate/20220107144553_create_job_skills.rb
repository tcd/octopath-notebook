class CreateJobSkills < ActiveRecord::Migration[6.0]
  def change
    create_table(:job_skills) do |t|
      t.string(:name, null: false, index: { unique: true })
      t.string(:job_name, null: false, index: true)

      t.string(:in_game_description, null: false)
      t.string(:job_order, null: false)
      t.string(:divine_skill, null: false, default: false)
      t.integer(:sp_cost, null: false, default: 0)
      t.string(:target, null: false)
      t.string(:effect_type, null: false)

      t.integer(:invocation_ratio)
      t.decimal(:defense_modifier, precision: 8, scale: 2)

      t.jsonb(:boost_data, default: {})
      t.jsonb(:extra_data, default: {})

      t.string(:notes)
      t.jsonb(:metadata, default: {})
      t.timestamps()

    end
    add_foreign_key(:job_skills, :jobs, column: :job_name, primary_key: :name)
  end
end
