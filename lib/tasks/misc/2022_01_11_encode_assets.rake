namespace(:misc) do

  task(encode_assets: :environment) do
    images_dir = Rails.root.join("app", "assets", "images", "game-assets")
    folders = ["Ailments", "DamageTypes", "Jobs"]
    results = {}
    folders.each do |folder|
      images = {}
      images_dir.join(folder).children.each do |file|
        next if file.basename.to_s == ".DS_Store"
        image_name = file.basename.to_s.split(".")[0]
        data = Base64.strict_encode64(file.read)
        images[image_name] = "data:image/png;base64," + data
      end
      results[folder] = images
    end
    # puts(results.to_json)
    out_file = Lib::Util.save_to_file(results.to_json, "assets.json")
    puts("file written: #{out_file}")
  end

  task(import_assets: :environment) do
    data_file_path = Rails.root.join("db", "seed_data", "assets.json")
    data = Lib::FlatFile::Json.from_file(data_file_path)
    data["Jobs"].each do |job_name, image_data|
      job = Job.find_by(name: job_name)
      job.update!(encoded_picture: image_data)
    end
  end

end
