module Serializers
  class CharacterSerializer < Blueprinter::Base

    identifier(:id)

    fields(:kind)

    fields(
      :name,
      :primary_job_name,
      :encoded_picture,
    )

  end
end
