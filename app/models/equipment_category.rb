##
# - Shields
# - Headgear
# - Body Armor
# - Accessories
# - Swords
# - Spears
# - Daggers
# - Axes
# - Bows
# - Staves
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

  # @!attribute encoded_picture
  #   @return [String]

  # @!endgroup Attributes

  # =====================================================================
  # Associations
  # =====================================================================

  # @!group Associations

  # @!attribute equipment
  #   @return [Array<Equipment>]
  has_many(
    :equipment,
    class_name: "Equipment",
    primary_key: "name",
    foreign_key: "category_name",
  )

  # ----------------------------------------------------------------------------

  # @!attribute job_equipment_categories
  #   @return [Array<JobEquipmentCategory>]
  has_many(:job_equipment_categories, inverse_of: :equipment_category)

  # @!attribute jobs
  #   @return [Array<Job>]
  has_many(:jobs, through: :job_equipment_categories)

  # @!endgroup Associations

  # ==========================================================================
  # Scopes
  # ==========================================================================

  # @!group Scopes

  # @!method self.scope_for_trestle()
  #   @return [EquipmentCategory::ActiveRecord_Relation]
  scope(:scope_for_trestle, -> { all() })

  # ----------------------------------------------------------------------------

  # @!method self.weapons()
  #   @return [EquipmentCategory::ActiveRecord_Relation]
  scope(:weapons, -> { where(weapon: true) })

  # @!method self.armor()
  #   @return [EquipmentCategory::ActiveRecord_Relation]
  scope(:armor, -> { where(weapon: false) })

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
