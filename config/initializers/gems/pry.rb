if defined?(Pry)

  if Pry::Prompt[:rails]
    Pry.config.prompt = Pry::Prompt[:rails]
  end

  # Output string to the system clipboard (MacOS only).
  #
  # @param input [String]
  # @return [String]
  def pbcopy(input)
    str = input.to_s()
    IO.popen("pbcopy", "w") { |f| f << str }
    return str
  end

  # @return [Array<String>]
  def clean_call_stack(filter = "/gems/")
    caller.reject { |line| line.include?(filter) }
  end

end
