source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.4"

gem "acts_as_favoritor", "~> 5.0" # Adds Favorite, Follow, Vote, etc. functionality to ActiveRecord models
gem "acts-as-taggable-on", "~> 6.5" # Simplifies dealing with *tags*
gem "chronic", "~> 0.10.2" # A natural language date parser
gem "chronic_duration", "~> 0.10.6" # A natural language duration parser
gem "counter_culture", "~> 2.9" # Counter caches for faster queries
gem "lograge", "~> 0.11.2" # Tame Rails' multi-line logging into a single line per request
gem "nilify_blanks", "~> 1.4" # Automatically convert blank values to nil (So we don"t junk up our DB)
gem "pg", ">= 0.18", "< 2.0" # Use postgresql as the database for Active Record
gem "pg_search", "~> 2.3" # Define ActiveRecord scopes that take advantage of PostgreSQL's full text search
gem "puma", "~> 4.1" # Use Puma as the app server
gem "rack-cors" # Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem "rails", "~> 6.0.4", ">= 6.0.4.1" # Bundle edge Rails instead: gem 'rails', github: 'rails/rails', branch: 'main'
gem "sidekiq", "~> 6.3" # Simple, efficient background processing for Ruby. (Adapter for Active Job)

# Active Storage
gem "aws-sdk-s3", "~> 1.104" # AWS Simple Storage Service (S3) Client
gem "image_processing", "~> 1.2" # Use Active Storage variant

# Views
gem "cocoon", "~> 1.2" # Unobtrusive nested forms handling, using jQuery.
# gem "flatpickr", "~> 4.6"
gem "gon", "~> 6.4" # Pass ruby variables to JavaScript code
# gem "momentjs-rails", "~> 2.20"
gem "sass-rails", ">= 6" # Use SCSS for stylesheets
gem "view_component", "~> 2.40", require: "view_component/engine" # https://github.com/github/view_component

# Trestle (Admin)
# gem "trestle", "~> 0.9.5" # Admin dashboard
# gem "trestle-active_storage", "~> 3.0" # ActiveStorage integration for Trestle
gem "trestle-auth", "~> 0.4.3" # Authentication plugin for Trestle
gem "trestle-jsoneditor", "~> 0.1.0" # Not officially supported by Trestle...
# gem "trestle-search", "~> 0.4.3" # Search plugin for Trestle

# Trestle Forks
gem "trestle",                github: "tcd/trestle",                branch: "master"
gem "trestle-active_storage", github: "tcd/trestle-active_storage", branch: "image-preview"
gem "trestle-search",         github: "tcd/trestle-search",         branch: "filters"

# Heroku
# gem "rails3_serve_static_assets", github: "heroku/rails3_serve_static_assets"

group(:development, :test) do
  gem "awesome_print" # Pretty print Ruby objects
  gem "bullet", "~> 6.1" # Identifies N+1 queries and unused eager loading
  gem "dotenv-rails", "~> 2.7" # Load .env files
  gem "pry", "~> 0.13.0" # Better rails console
end

group(:development) do
  gem "colorize", "~> 0.8.1"
  gem "pry-rails" # Better rails console
  gem "rails-erd", "~> 1.6" # Generate an entity-relationship diagram (ERD) from Rails models
  gem "redcarpet", "~> 3.5" # A fast, safe and extensible Markdown to (X)HTML parser
  gem "solargraph", "~> 0.44.0" # Ruby LSP support
  gem "streamio-ffmpeg", "~> 3.0" # Simple yet powerful ruby ffmpeg wrapper for reading metadata and transcoding movies
  gem "tty-file", "~> 0.10.0" # File manipulation utility methods
  gem "tty-progressbar", "~> 0.18.2" # Display a single or multiple progress bars in the terminal
  gem "tty-prompt", "~> 0.22.0" # Interactive command line prompt
  gem "yard", "~> 0.9.25" # Ruby code documentation generator
end

group(:test) do
  gem "capybara", "~> 3.34" # Helpers for testing views & view components
end
