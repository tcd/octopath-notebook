# @param to [Hash] the object to add the value to
# @param from [Hash] the object to get the value from
# @param value [symbol] value to copy
# @param new_key [symbol] key for the value in `to`
# @return [void]
def copy_value(to, from, value, new_key = nil)
  if new_key
    to[new_key] = from[value]
  else
    to[value] = from[value]
  end
  return nil
end

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

      copy_value(result, row, "name")
      copy_value(result, row, "original_order")
      copy_value(result, row, "job_name")
      copy_value(result, row, "job_order")
      copy_value(result, row, "in_game_description")
      copy_value(result, row, "sp_cost")
      copy_value(result, row, "effect_type")
      copy_value(result, row, "target")
      copy_value(result, row, "notes")

      copy_value(result, row, "invocation_ratio")
      copy_value(result, row, "defense_modifier")

      extra_data = {}
      copy_value(extra_data, row, "skill_all")
      copy_value(extra_data, row, "convergence")
      copy_value(extra_data, row, "diffusion")
      copy_value(extra_data, row, "reflection")
      copy_value(extra_data, row, "counter")
      copy_value(extra_data, row, "hide_out")
      copy_value(extra_data, row, "repeat")
      copy_value(extra_data, row, "cover")
      copy_value(extra_data, row, "disable_magic")
      copy_value(extra_data, row, "enchant")
      copy_value(extra_data, row, "chase_attack")

      row["extra_data"] = extra_data.compact

      result["boost_data"] = parse_boost_data(row)

      results << result.compact
    end
    new_file_path = Lib::Util.save_to_file(JSON.pretty_generate(results), "job-skills.json")
    puts("file written: #{new_file_path}")
  end

end
