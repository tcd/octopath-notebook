if Rails.env.development?()

  require "yard"

  # https://github.com/lsegal/yard/blob/359006641260eef1fe6d28f5c43c7c98d40f257d/docs/templates/default/yard_tags/html/setup.rb

  # Models
  YARD::Tags::Library.define_tag("Namespace", :namespace)
  YARD::Tags::Library.define_tag("Default Value", :default_value)
  YARD::Tags::Library.define_tag("Example Value", :example_value)
  YARD::Tags::Library.define_tag("Required", :required)
  YARD::Tags::Library.define_tag("Unique", :unique)

  # API
  # YARD::Tags::Library.define_tag("Api Version", :api_version)
  # YARD::Tags::Library.define_tag("Resource", :resource)
  # YARD::Tags::Library.define_tag("Route", :route)
  # YARD::Tags::Library.define_tag("Action", :action)
  # YARD::Tags::Library.define_tag("Response Type", :response_type)
  # YARD::Tags::Library.define_tag("Response", :response, :with_name)
  # YARD::Tags::Library.define_tag("Body Param", :body_param, :with_types_and_name)

  YARD::Rake::YardocTask.new do |t|
    t.files = [
      "app/**/*.rb",
      "test/test_helper.rb",
    ]
    t.options = [
      "--charset=utf-8",
      "--markup-provider=redcarpet", # Better markdown support
      "--markup=markdown", # Better markdown support
      "--readme=README.md",
      "--private", # Document private methods
      "--protected", # Document protected methods
      "--exclude=app/admin/mixins.rb",
      # "--template-path=#{Rails.root.join('tooling/yard/doc-src/templates')}",
    ]
    # t.stats_options = ["--list-undoc"] # optional
  end

end
