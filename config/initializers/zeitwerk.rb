TO_COLLAPSE = [
  "app/admin/misc",
  "app/admin/models",
].freeze()

# TO_IGNORE = [
#   "app/lib/services/charts/course_timelines/*.rb",
#   "app/lib/services/google/calendar/*.rb",
#   "app/lib/services/google/classroom/fetch/*.rb",
#   "app/lib/services/google/classroom/process/*.rb",
#   "app/lib/services/google/classroom/pull/*.rb",
# ].freeze()

loader = Rails.autoloaders.main
# loader.logger = Rails.logger
TO_COLLAPSE.each { |path| loader.collapse(path) }
# TO_IGNORE.each { |path| loader.ignore(path) }
