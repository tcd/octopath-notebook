# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_13_155057) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "characters", force: :cascade do |t|
    t.string "name", null: false
    t.string "full_name", null: false
    t.string "primary_job_name", null: false
    t.string "starting_town_name", null: false
    t.string "native_town_name"
    t.jsonb "metadata", default: {}
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "encoded_picture"
    t.index ["full_name"], name: "index_characters_on_full_name", unique: true
    t.index ["name"], name: "index_characters_on_name", unique: true
    t.index ["primary_job_name"], name: "index_characters_on_primary_job_name"
    t.index ["starting_town_name"], name: "index_characters_on_starting_town_name"
  end

  create_table "damage_types", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "physical", null: false
    t.boolean "elemental", null: false
    t.integer "game_order", null: false
    t.jsonb "metadata", default: {}
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "is_standard", default: false, null: false
    t.string "encoded_picture"
    t.index ["name"], name: "index_damage_types_on_name", unique: true
  end

  create_table "equipment", force: :cascade do |t|
    t.string "name", null: false
    t.string "category_name", null: false
    t.integer "sell_price"
    t.integer "physical_attack", default: 0, null: false
    t.integer "physical_defense", default: 0, null: false
    t.integer "elemental_attack", default: 0, null: false
    t.integer "elemental_defense", default: 0, null: false
    t.integer "max_hp", default: 0, null: false
    t.integer "max_sp", default: 0, null: false
    t.integer "accuracy", default: 0, null: false
    t.integer "speed", default: 0, null: false
    t.integer "critical", default: 0, null: false
    t.integer "evasion", default: 0, null: false
    t.string "other_effects"
    t.jsonb "metadata", default: {}
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_name"], name: "index_equipment_on_category_name"
    t.index ["name"], name: "index_equipment_on_name", unique: true
  end

  create_table "equipment_categories", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "weapon", null: false
    t.jsonb "metadata", default: {}
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "encoded_picture"
    t.index ["name"], name: "index_equipment_categories_on_name", unique: true
  end

  create_table "examples", primary_key: "name", id: :string, force: :cascade do |t|
    t.string "description"
    t.jsonb "metadata", default: {}
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "hyperlinks", force: :cascade do |t|
    t.string "title"
    t.string "url", null: false
    t.string "website_name"
    t.string "description"
    t.integer "sort_order", default: 1000
    t.jsonb "metadata", default: {}
    t.string "linkable_type"
    t.bigint "linkable_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["linkable_type", "linkable_id"], name: "index_hyperlinks_on_linkable_type_and_linkable_id"
    t.index ["url"], name: "index_hyperlinks_on_url", unique: true
  end

  create_table "job_skills", force: :cascade do |t|
    t.string "name", null: false
    t.string "job_name", null: false
    t.string "in_game_description", null: false
    t.string "job_order", null: false
    t.boolean "divine_skill", default: false, null: false
    t.integer "sp_cost", default: 0, null: false
    t.string "target", null: false
    t.string "effect_type", null: false
    t.integer "invocation_ratio"
    t.decimal "defense_modifier", precision: 8, scale: 2
    t.jsonb "boost_data", default: {}
    t.jsonb "extra_data", default: {}
    t.string "notes"
    t.jsonb "metadata", default: {}
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["job_name"], name: "index_job_skills_on_job_name"
    t.index ["name"], name: "index_job_skills_on_name", unique: true
  end

  create_table "job_stat_bonuses", force: :cascade do |t|
    t.decimal "value", precision: 8, scale: 2, null: false
    t.bigint "job_id"
    t.bigint "stat_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["job_id", "stat_id"], name: "index_job_stat_bonuses_on_job_id_and_stat_id", unique: true
    t.index ["job_id"], name: "index_job_stat_bonuses_on_job_id"
    t.index ["stat_id"], name: "index_job_stat_bonuses_on_stat_id"
  end

  create_table "job_support_skills", force: :cascade do |t|
    t.string "name", null: false
    t.string "job_name", null: false
    t.integer "unlock_order", null: false
    t.boolean "one_per_party", null: false
    t.string "short_description", null: false
    t.string "in_game_description", null: false
    t.string "notes"
    t.jsonb "metadata", default: {}
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["job_name"], name: "index_job_support_skills_on_job_name"
    t.index ["name"], name: "index_job_support_skills_on_name", unique: true
  end

  create_table "jobs", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "primary", null: false
    t.boolean "secret", null: false
    t.integer "game_order", null: false
    t.jsonb "metadata", default: {}
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "encoded_picture"
    t.string "weapons", default: [], null: false, array: true
    t.index ["name"], name: "index_jobs_on_name", unique: true
  end

  create_table "parties", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.string "notes"
    t.jsonb "metadata", default: {}
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_parties_on_name", unique: true
  end

  create_table "party_characters", force: :cascade do |t|
    t.bigint "party_id"
    t.bigint "character_id"
    t.jsonb "metadata", default: {}
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_party_characters_on_character_id"
    t.index ["party_id", "character_id"], name: "index_party_characters_on_party_id_and_character_id", unique: true
    t.index ["party_id"], name: "index_party_characters_on_party_id"
  end

  create_table "regions", force: :cascade do |t|
    t.string "name", null: false
    t.jsonb "metadata", default: {}
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_regions_on_name", unique: true
  end

  create_table "stats", force: :cascade do |t|
    t.string "name", null: false
    t.string "description", null: false
    t.jsonb "metadata", default: {}
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "encoded_picture"
    t.string "full_name", null: false
    t.index ["name"], name: "index_stats_on_name", unique: true
  end

  create_table "taggings", id: :serial, force: :cascade do |t|
    t.integer "tag_id"
    t.string "taggable_type"
    t.integer "taggable_id"
    t.string "tagger_type"
    t.integer "tagger_id"
    t.string "context", limit: 128
    t.datetime "created_at"
    t.index ["context"], name: "index_taggings_on_context"
    t.index ["tag_id", "taggable_id", "taggable_type", "context", "tagger_id", "tagger_type"], name: "taggings_idx", unique: true
    t.index ["tag_id"], name: "index_taggings_on_tag_id"
    t.index ["taggable_id", "taggable_type", "context"], name: "taggings_taggable_context_idx"
    t.index ["taggable_id", "taggable_type", "tagger_id", "context"], name: "taggings_idy"
    t.index ["taggable_id"], name: "index_taggings_on_taggable_id"
    t.index ["taggable_type"], name: "index_taggings_on_taggable_type"
    t.index ["tagger_id", "tagger_type"], name: "index_taggings_on_tagger_id_and_tagger_type"
    t.index ["tagger_id"], name: "index_taggings_on_tagger_id"
  end

  create_table "tags", id: :serial, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "taggings_count", default: 0
    t.index ["name"], name: "index_tags_on_name", unique: true
  end

  create_table "towns", force: :cascade do |t|
    t.string "name", null: false
    t.string "region_name", null: false
    t.jsonb "metadata", default: {}
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_towns_on_name", unique: true
    t.index ["region_name"], name: "index_towns_on_region_name"
  end

  create_table "weapon_types", force: :cascade do |t|
    t.string "singular_name", null: false
    t.string "plural_name", null: false
    t.string "encoded_picture"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["plural_name"], name: "index_weapon_types_on_plural_name", unique: true
    t.index ["singular_name"], name: "index_weapon_types_on_singular_name", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "characters", "jobs", column: "primary_job_name", primary_key: "name"
  add_foreign_key "characters", "towns", column: "native_town_name", primary_key: "name"
  add_foreign_key "characters", "towns", column: "starting_town_name", primary_key: "name"
  add_foreign_key "equipment", "equipment_categories", column: "category_name", primary_key: "name"
  add_foreign_key "job_skills", "jobs", column: "job_name", primary_key: "name"
  add_foreign_key "job_stat_bonuses", "jobs"
  add_foreign_key "job_stat_bonuses", "stats"
  add_foreign_key "job_support_skills", "jobs", column: "job_name", primary_key: "name"
  add_foreign_key "party_characters", "characters"
  add_foreign_key "party_characters", "parties"
  add_foreign_key "taggings", "tags"
  add_foreign_key "towns", "regions", column: "region_name", primary_key: "name"
end
