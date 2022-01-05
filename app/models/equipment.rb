# any item that can be equipped to a character
class Equipment < ApplicationRecord

  # =====================================================================
  # Attributes
  # =====================================================================

  # @!group Attributes

  # @!attribute name
  #   @required
  #   @return [String]
  validates(:name, presence: true, uniqueness: true)

  # @!attribute category_name
  #   @required
  #   @return [String]
  validates(:category_name, presence: true)

  # @!attribute sell_price
  #   @return [Integer]

  # @!attribute other_effects
  #   @return [String]

  # @!attribute physical_attack
  #   @required
  #   @default_value 0
  #   @return [Integer]
  validates(:physical_attack, presence: true)

  # @!attribute physical_defense
  #   @required
  #   @default_value 0
  #   @return [Integer]
  validates(:physical_defense, presence: true)

  # @!attribute elemental_attack
  #   @required
  #   @default_value 0
  #   @return [Integer]
  validates(:elemental_attack, presence: true)

  # @!attribute elemental_defense
  #   @required
  #   @default_value 0
  #   @return [Integer]
  validates(:elemental_defense, presence: true)

  # @!attribute max_hp
  #   @required
  #   @default_value 0
  #   @return [Integer]
  validates(:max_hp, presence: true)

  # @!attribute max_sp
  #   @required
  #   @default_value 0
  #   @return [Integer]
  validates(:max_sp, presence: true)

  # @!attribute accuracy
  #   @required
  #   @default_value 0
  #   @return [Integer]
  validates(:accuracy, presence: true)

  # @!attribute speed
  #   @required
  #   @default_value 0
  #   @return [Integer]
  validates(:speed, presence: true)

  # @!attribute critical
  #   @required
  #   @default_value 0
  #   @return [Integer]
  validates(:critical, presence: true)

  # @!attribute evasion
  #   @required
  #   @default_value 0
  #   @return [Integer]
  validates(:evasion, presence: true)

  # @!endgroup Attributes

  # =====================================================================
  # Associations
  # =====================================================================

  # @!group Associations

  # @!attribute category
  #   @return [EquipmentCategory]
  belongs_to(
    :equipment_category,
    class_name: "EquipmentCategory",
    foreign_key: "category_name",
    primary_key: "name",
    required: true,
  )

  # @!endgroup Associations

  # ==========================================================================
  # Scopes
  # ==========================================================================

  # @!group Scopes

  # @!method self.scope_for_trestle()
  #   @return [Equipment::ActiveRecord_Relation]
  scope(:scope_for_trestle, -> { all() })

  # @!endgroup Scopes

  # ============================================================================
  # Class Methods
  # ============================================================================

  # @return [String]
  def self.icon_css_class()
    return "mdi mdi-shield-sword"
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
