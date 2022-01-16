module Serializers
  class JobSerializer < Blueprinter::Base

    identifier(:id)

    fields(:kind)

    fields(
      :name,
      :primary,
      :secret,
      :game_order,
      :encoded_picture,
      :weapons,
    )

  end
end
