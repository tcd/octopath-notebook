class DamageType < ApplicationRecord

  # =====================================================================
  # Attributes
  # =====================================================================

  # @!group Attributes

  # @!attribute name
  #   @required
  #   @return [String]
  validates(:name, presence: true, uniqueness: true)

  # @!attribute physical
  #   @required
  #   @return [Boolean]

  # @!attribute elemental
  #   @required
  #   @return [Boolean]

  # @!attribute game_order
  #   @required
  #   @return [Integer]

  # @!attribute is_standard
  #   @required
  #   @return [Boolean]

  # @!endgroup Attributes

  # =====================================================================
  # Associations
  # =====================================================================

  # @!group Associations

  # @!endgroup Associations

  # ==========================================================================
  # Scopes
  # ==========================================================================

  # @!group Scopes

  # @!method self.scope_for_trestle()
  #   @return [DamageType::ActiveRecord_Relation]
  scope(:scope_for_trestle, -> { all() })

  # ----------------------------------------------------------------------------

  # @!method self.standard()
  #   @return [DamageType::ActiveRecord_Relation]
  scope(:standard, -> { where(is_standard: true) })

  # @!method self.standard()
  #   @return [DamageType::ActiveRecord_Relation]
  scope(:not_standard, -> { where(is_standard: false) })

  # @!endgroup Scopes

  # ============================================================================
  # Class Methods
  # ============================================================================

  # @return [String]
  def self.icon_css_class()
    return "mdi mdi-fire"
  end

  # =====================================================================
  # Instance Methods
  # =====================================================================

  # @return [String]
  def display_name()
    return " " unless self.persisted?()
    return self.name
  end

end
