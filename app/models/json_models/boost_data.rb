module JsonModels
  class BoostData

    # @!attribute level_0
    #   @return [BoostLevelData]

    # @!attribute level_1
    #   @return [BoostLevelData]

    # @!attribute level_2
    #   @return [BoostLevelData]

    # @!attribute level_3
    #   @return [BoostLevelData]

    # ============================================================================
    # Class Methods
    # ============================================================================

    # @return [Array<Symbol>]
    def self.permitted_params()
      return [
        :skill_all,
        :convergence,
        :diffusion,
        :reflection,
        :counter,
        :hide_out,
        :repeat,
        :cover,
        :disable_magic,
        :enchant,
        :chase_attack,
      ]
    end

  end
end
