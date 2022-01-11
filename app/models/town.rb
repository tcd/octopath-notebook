# a town in the continent of Orsterra
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

  # ---------------------------------------------------------------------

  # @!attribute starting_characters
  #   @return [Array<Character>]
  has_many(
    :starting_characters,
    class_name: "Character",
    primary_key: "name",
    foreign_key: "starting_town_name",
  )

  # @!attribute native_characters
  #   @return [Array<Character>]
  has_many(
    :native_characters,
    class_name: "Character",
    primary_key: "name",
    foreign_key: "native_town_name",
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
