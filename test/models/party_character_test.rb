require "test_helper"

module Tests
  module Models
    class PartyCharacterTest < ActiveSupport::TestCase

      setup do
        @model         = PartyCharacter
        @initial_count = @model.count()
      end

      test "that there are fixtures" do
        assert(@initial_count > 0)
      end

      test ".icon_css_class" do
        refute_nil(@model.icon_css_class())
      end

      test "#display_name" do
        entity = @model.includes(:party, :character).first()
        refute_nil(entity.display_name())
      end

      test "#generate_name" do
        party = Party.first()
        character = characters(:Primrose)
        record = PartyCharacter.new(party: party, character: character)
        record.save!()
        assert_equal("Example Party - Primrose", record.name)
      end

      test "#equipment" do
        skip()
        # entity = @model.first()
        entity = @model.includes(:equipment).first()
        assert_equal(4, entity.equipment.count)
      end

    end
  end
end
