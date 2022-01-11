module JsonModels
  class JobSkillExtraData

    # @!attribute skill_all
    #   @return [Boolean]

    # @!attribute convergence
    #   @return [Boolean]

    # @!attribute diffusion
    #   @return [Boolean]

    # @!attribute reflection
    #   @return [Boolean]

    # @!attribute counter
    #   @return [Boolean]

    # @!attribute hide_out
    #   @return [Boolean]

    # @!attribute repeat
    #   @return [Boolean]

    # @!attribute cover
    #   @return [Boolean]

    # @!attribute disable_magic
    #   @return [Boolean]

    # @!attribute enchant
    #   @return [Boolean]

    # @!attribute chase_attack
    #   @return [Boolean]

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
