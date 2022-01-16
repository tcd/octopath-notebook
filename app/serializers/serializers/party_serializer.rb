module Serializers
  class PartySerializer < Blueprinter::Base

    identifier(:id)

    fields(:kind)

    fields(:created_at, :updated_at)

    fields(
      :name,
      :description,
      :notes,
    )

    association(:party_characters, blueprint: PartyCharacterSerializer)

  end
end
