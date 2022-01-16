module Serializers
  class DamageTypeSerializer < Blueprinter::Base

    identifier(:id)

    fields(:kind)

    fields(
      :name,
      :physical,
      :elemental,
      :game_order,
      :is_standard,
      :encoded_picture,
    )

  end
end
