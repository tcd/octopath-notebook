# https://github.com/BetterErrors/better_errors#ignore-inspection-of-variables-with-certain-classes
# BetterErrors.ignored_classes = ['ActionDispatch::Request', 'ActionDispatch::Response']

if defined?(BetterErrors)
  BetterErrors.ignored_classes = []
end
