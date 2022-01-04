class EquipmentCategory < ApplicationRecord

  # =====================================================================
  # Attributes
  # =====================================================================

  # @!group Attributes

  # @!attribute name
  #   @required
  #   @return [String]
  validates(:name, presence: true, uniqueness: true)

  # @!attribute weapon
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
  #   @return [EquipmentCategory::ActiveRecord_Relation]
  scope(:scope_for_trestle, -> { all() })

  # @!endgroup Scopes

  # ============================================================================
  # Class Methods
  # ============================================================================

  # @return [String]
  def self.icon_css_class()
    return "mdi mdi-sitemap"
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
