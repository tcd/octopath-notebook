class CreateJobEquipmentCategories < ActiveRecord::Migration[6.0]
  def change()
    create_table(:job_equipment_categories) do |t|
      t.belongs_to(:job, foreign_key: true)
      t.belongs_to(:equipment_category, foreign_key: true)
      t.timestamps()
    end
    add_index(:job_equipment_categories, [:job_id, :equipment_category_id], unique: true, name: :index_job_equipment_categories_as_junction_table)
  end
end
