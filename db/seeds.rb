entity = ENV.fetch("entity", :none).to_sym()

if entity == :none
  Lib::Tasks::Seed.all()
end

begin
  Lib::Tasks::Seed.send(entity)
rescue StandardError => e
  binding.pry()
  puts(e)
end
