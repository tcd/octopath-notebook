class Town < ApplicationRecord
  # =====================================================================
  # Attributes
  # =====================================================================

  # @!group Attributes

  # @!attribute name
  #   @required
  #   @return [String]
  validates(:name, presence: true, uniqueness: true)

  # @!attribute region_name
  #   @required
  #   @return [String]
  validates(:region_name, presence: true)

  # @!endgroup Attributes

  # =====================================================================
  # Associations
  # =====================================================================

  # @!group Associations

  # @!attribute region
  #   @return [Region]
  belongs_to(
    :region,
    class_name: "Region",
    foreign_key: "region_name",
    primary_key: "name",
    required: true,
  )

  # @!endgroup Associations

  # ==========================================================================
  # Scopes
  # ==========================================================================

  # @!group Scopes

  # @!method self.scope_for_trestle()
  #   @return [Town::ActiveRecord_Relation]
  scope(:scope_for_trestle, -> { all() })

  # @!endgroup Scopes

  # ============================================================================
  # Class Methods
  # ============================================================================

  # @return [String]
  def self.icon_css_class()
    return "mdi mdi-map-search"
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
