namespace(:misc) do

  task(clean_job_stat_bonuses_data: :environment) do
    data = Lib::FlatFile::Json.from_file(Rails.root.join("ignore", "data", "job-stat-bonuses.json"))
    results = []
    data.each do |object|
      skill = object.dig("Skill")
      object.each do |key, value|
        next if key == "Skill"
        results << {
          job:   key,
          skill: skill,
          value: value.gsub("%", "").to_f / 100,
        }
      end
    end
    out_file = Lib::Util.save_to_file(results.to_json, "job-stat-bonuses.json")
    puts("file written: #{out_file}")
  end

end
