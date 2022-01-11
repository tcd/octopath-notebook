module JsonModels
  class BoostLevelData

    # @!attribute description
    #   Damage, BP, SP, Turns, Uses, Slashes, Weaknesses
    #   @required
    #   @return [String]

    # @!attribute integer_value
    #   @return [Integer]

    # @!attribute string_value
    #   @return [String]

    # @!attribute percentage_value
    #   @return [Decimal]

    # @!attribute bp_value
    #   @return [Integer]

    # @!attribute volume_value
    #   @return [Integer]

    # @!attribute multiplier_value
    #   @return [Integer]

    # @!attribute raw_value
    #   @return [String]

    # ============================================================================
    # Class Methods
    # ============================================================================

    # @return [Array<Symbol>]
    def self.permitted_params()
      return [
        :integer_value,
      ]
    end

  end
end
