class CreateJobStatBonuses < ActiveRecord::Migration[6.0]
  def change()
    create_table(:job_stat_bonuses) do |t|
      t.decimal(:value, precision: 8, scale: 2, null: false)
      t.belongs_to(:job, foreign_key: true)
      t.belongs_to(:stat, foreign_key: true)
      t.timestamps()
    end
    add_index(:job_stat_bonuses, [:job_id, :stat_id], unique: true)
  end
end
