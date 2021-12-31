# require "tty-prompt"

# # https://stackoverflow.com/questions/8112074/overriding-rails-default-rake-tasks
# Rake.application.instance_variable_get("@tasks").delete("db:reset")
##
# See:
#
# - [Rails rake tasks for dump & restore of PostgreSQL databases](https://gist.github.com/hopsoft/56ba6f55fe48ad7f8b90)
# - [`pg_dump` docs](https://www.postgresql.org/docs/11/app-pgdump.html)
# - [`pg_restore` docs](https://www.postgresql.org/docs/11/app-pgrestore.html)
namespace("db") do

  # # https://github.com/rails/rails/blob/master/railties/lib/rails/tasks/engine.rake
  # # https://github.com/rails/rails/blob/master/activerecord/lib/active_record/railties/databases.rake
  # task(reset: :environment) do
  #   raise Lib::Errors::DBResetError unless Rails.env.development?
  #   Rake::Task["db:drop"].invoke()
  #   Rake::Task["db:create"].invoke()
  #   Rake::Task["db:migrate"].invoke()
  #   Rake::Task["db:seed"].invoke()
  #   ActiveRecord::InternalMetadata[:environment] = Rails.env
  #   # ActiveRecord::InternalMetadata.where(key: "environment").update(environment: Rails.env)
  # end

  desc("Dumps the database to db/APP_NAME.dump")
  task(dump: :environment) do
    cmd = Lib::Tasks::Dump.dump_cmd()
    puts(cmd)
    exec(cmd)
  end

  # https://thoughtbot.com/blog/how-to-use-arguments-in-a-rake-task
  desc("Restores a database dump")
  task(restore: [:environment]) do
    files = Lib::Tasks::Dump.list_dumps_as_hash()
    prompt = TTY::Prompt.new()
    file = prompt.select("Please choose a file to restore from:", files, filter: true)
    confirm = prompt.yes?("Confirm DB restoration (This may overwrite an existing database)") do |q|
      q.default(false)
    end
    if confirm
      Rake::Task["db:drop"].invoke()
      Rake::Task["db:create"].invoke()
      cmd = Lib::Tasks::Dump.restore_cmd(dump_file: file)
      puts(cmd)
      exec(cmd)
    else
      puts("okay, maybe next time")
    end
  end

  desc("List dumps")
  task(list_dumps: :environment) do
    Lib::Tasks::Dump.list_dumps()
  end

end
