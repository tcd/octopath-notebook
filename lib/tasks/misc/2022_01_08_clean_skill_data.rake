BOOST_DATA_KEYS = {
  "level_0" => "Boost: None",
  "level_1" => "Boost: Lv 2",
  "level_2" => "Boost: Lv 3",
  "level_3" => "Boost: MAX",
}.freeze()

# @return [Hash]
def parse_boost_data(object)
  boost_data = {
    "level_0" => {},
    "level_1" => {},
    "level_2" => {},
    "level_3" => {},
  }

  BOOST_DATA_KEYS.each do |key, value|
    raw_value = object.dig(value)

    next if raw_value.nil?

    boost_data[key]["raw_value"] = raw_value

    if raw_value.is_a?(Numeric)
      boost_data[key]["description"]   = "Damage"
      boost_data[key]["integer_value"] = raw_value
      next
    end

    if (matches = raw_value.match(/^(?<number>\d+)%$/))
      boost_data[key]["description"]      = "Percentage"
      boost_data[key]["integer_value"]    = matches[:number].to_i()
      boost_data[key]["percentage_value"] = (matches[:number].to_i() / 100.0)
      next
    end
    if (matches = raw_value.match(/^(?<number>\d+)$/i))
      boost_data[key]["description"]   = "Damage"
      boost_data[key]["integer_value"] = matches[:number].to_i()
      next
    end
    if (matches = raw_value.match(/^(?<number>\d+)\s+turns?$/i))
      boost_data[key]["description"]   = "Turns"
      boost_data[key]["integer_value"] = matches[:number].to_i()
      next
    end
    if (matches = raw_value.match(/^(?<number>\d+)%\s+SP$/i))
      boost_data[key]["description"]      = "SP Percentage"
      boost_data[key]["integer_value"]    = matches[:number].to_i()
      boost_data[key]["percentage_value"] = (matches[:number].to_i() / 100.0)
      next
    end
    if (matches = raw_value.match(/^(?<number>\d+)\s+BP$/i))
      boost_data[key]["description"]   = "BP"
      boost_data[key]["integer_value"] = matches[:number].to_i()
      next
    end
    if (matches = raw_value.match(/^(?<number>\d+)\s+Uses?$/i))
      boost_data[key]["description"]   = "Uses"
      boost_data[key]["integer_value"] = matches[:number].to_i()
      next
    end
    if (matches = raw_value.match(/^(?<number>\d+)\s+times?$/i))
      boost_data[key]["description"]   = "Times"
      boost_data[key]["integer_value"] = matches[:number].to_i()
      next
    end
    if (matches = raw_value.match(/^(?<number>\d+)\s+\(x(?<multiplier>\d+)\)$/i))
      boost_data[key]["description"]      = "Damage"
      boost_data[key]["integer_value"]    = matches[:number].to_i()
      boost_data[key]["multiplier_value"] = matches[:multiplier].to_i()
      next
    end

  end

  return boost_data.compact().as_json
end

namespace(:misc) do

  task(clean_skill_data: :environment) do
    file = Rails.root.join("db", "seed_data", "JobSkills.tsv")
    rows = Lib::FlatFile::Tsv.from_file(file)
    pb = Lib::ProgressBar.new(rows.length, title: "cleaning skill data")
    results = []
    rows.each do |row|
      pb.increment()
      result = {}

      result["name"]                = row["name"]
      result["original_order"]      = row["original_order"]
      result["job_name"]            = row["job_name"]
      result["job_order"]           = row["job_order"]
      result["divine_skill"]        = (row["divine_skill"] == "true")
      result["in_game_description"] = row["in_game_description"]
      result["sp_cost"]             = row["sp_cost"]
      result["effect_type"]         = row["effect_type"]
      result["target"]              = row["target"]

      result["invocation_ratio"] = row["invocation_ratio"]
      result["defense_modifier"] = row["defense_modifier"]

      extra_data = {}
      extra_data["skill_all"]     = (row["skill_all"] == "true")
      extra_data["convergence"]   = (row["convergence"] == "true")
      extra_data["diffusion"]     = (row["diffusion"] == "true")
      extra_data["reflection"]    = (row["reflection"] == "true")
      extra_data["counter"]       = (row["counter"] == "true")
      extra_data["hide_out"]      = (row["hide_out"] == "true")
      extra_data["repeat"]        = (row["repeat"] == "true")
      extra_data["cover"]         = (row["cover"] == "true")
      extra_data["disable_magic"] = (row["disable_magic"] == "true")
      extra_data["enchant"]       = (row["enchant"] == "true")
      extra_data["chase_attack"]  = (row["chase_attack"] == "true")

      result["extra_data"] = extra_data.compact

      result["boost_data"] = parse_boost_data(row)

      result["notes"] = row["notes"]

      results << result.compact
    end
    new_file_path = Lib::Util.save_to_file(JSON.pretty_generate(results), "job-skills.json")
    puts("file written: #{new_file_path}")
  end

end
