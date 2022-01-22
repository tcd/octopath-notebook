module Serializers
  class EquipmentSerializer < Blueprinter::Base

    identifier(:id)

    fields(:kind)

    fields(
      :name,
      :category_name,
      :physical_attack,
      :physical_defense,
      :elemental_attack,
      :elemental_defense,
      :max_hp,
      :max_sp,
      :accuracy,
      :speed,
      :critical,
      :evasion,
      :other_effects,
    )

  end
end
