# ==============================================================================
# schema
# ==============================================================================
namespace(:schema) do
  # ============================================================================
  # json
  # ============================================================================
  namespace(:json) do

    task(generate: [:environment]) do
      Lib::Schema::FromYard.generate()
    end

    task(clean: [:environment]) do
      dir_path = Rails.root.join("storage/saved_files/schema")
      FileUtils.rm_rf("#{dir_path}/.", secure: true)
    end

    task(debug: [:environment]) do
      Lib::Schema::FromYard::V3.debug()
    end

  end
  # ============================================================================
  # swagger
  # ============================================================================
  namespace(:swagger) do

    task(generate: [:environment]) do
      Lib::Schema::Swagger.generate()
    end

  end
end
