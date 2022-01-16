module Serializers
  class PartyCharacterSerializer < Blueprinter::Base

    identifier(:id)

    fields(:kind)

    fields(:created_at, :updated_at)

    fields(
      :party_id,
      :character_id,
      :name,
      :description,
      :notes,
    )

    association(:character, blueprint: CharacterSerializer)

  end
end
