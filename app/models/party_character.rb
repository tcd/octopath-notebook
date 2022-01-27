class PartyCharacter < ApplicationRecord

  before_create(:generate_name)

  # @return [void]
  def generate_name()
    return nil unless self.name.blank?()
    self.name = "#{party&.display_name()} - #{character&.display_name()}"
  end

  # =====================================================================
  # Attributes
  # =====================================================================

  # @!group Attributes

  # @!attribute name [r]
  #   @return [String]

  # @!attribute description
  #   @return [String]

  # @!attribute notes
  #   @return [String]

  # @!attribute secondary_job_id
  #   @return [Integer]

  # @!endgroup Attributes

  # =====================================================================
  # Associations
  # =====================================================================

  # @!group Associations

  # @!attribute party
  #   @return [Party]
  belongs_to(:party, optional: false)
  validates_associated(:party)

  # @!attribute character
  #   @return [Character]
  belongs_to(:character, optional: false)

  # @!attribute secondary_job
  #   @return [Job]
  belongs_to(
    :secondary_job,
    class_name: "Job",
    foreign_key: :secondary_job_id,
    optional: true,
  )

  # ----------------------------------------------------------------------------

  # @!attribute equipment
  #   @return [Array<Equipment>]

  # @!attribute shield
  #   @return [Equipment]

  # @!attribute headgear
  #   @return [Equipment]

  # @!attribute body_armor
  #   @return [Equipment]

  # @!attribute accessory_1
  #   @return [Equipment]

  # @!attribute accessory_2
  #   @return [Equipment]

  # @!attribute sword
  #   @return [Equipment]

  # @!attribute polearm
  #   @return [Equipment]

  # @!attribute dagger
  #   @return [Equipment]

  # @!attribute axe
  #   @return [Equipment]

  # @!attribute bow
  #   @return [Equipment]

  # @!attribute staff
  #   @return [Equipment]

  belongs_to(:shield,      foreign_key: :shield_id,      class_name: "Equipment", optional: true)
  belongs_to(:headgear,    foreign_key: :headgear_id,    class_name: "Equipment", optional: true)
  belongs_to(:body_armor,  foreign_key: :body_armor_id,  class_name: "Equipment", optional: true)
  belongs_to(:accessory_1, foreign_key: :accessory_1_id, class_name: "Equipment", optional: true)
  belongs_to(:accessory_2, foreign_key: :accessory_1_id, class_name: "Equipment", optional: true)
  belongs_to(:sword,       foreign_key: :sword_id,       class_name: "Equipment", optional: true)
  belongs_to(:polearm,     foreign_key: :polearm_id,     class_name: "Equipment", optional: true)
  belongs_to(:dagger,      foreign_key: :dagger_id,      class_name: "Equipment", optional: true)
  belongs_to(:axe,         foreign_key: :axe_id,         class_name: "Equipment", optional: true)
  belongs_to(:bow,         foreign_key: :bow_id,         class_name: "Equipment", optional: true)
  belongs_to(:staff,       foreign_key: :staff_id,       class_name: "Equipment", optional: true)

  # ----------------------------------------------------------------------------

  # @!attribute primary_job
  #   @return [Job]
  has_one(
    :primary_job,
    class_name: "Job",
    through: :character,
  )

  # @!endgroup Associations

  # ==========================================================================
  # Scopes
  # ==========================================================================

  # @!group Scopes

  # @!method self.scope_for_trestle()
  #   @return [PartyCharacter::ActiveRecord_Relation]
  scope(:scope_for_trestle, -> { all() })

  # @!endgroup Scopes

  # ============================================================================
  # Class Methods
  # ============================================================================

  # @return [String]
  def self.icon_css_class()
    return "mdi mdi-set-all"
  end

  # @return [Array<Symbol>]
  def self.equipment_relationship_name_symbols
    return [
      :shield,
      :headgear,
      :body_armor,
      :accessory_1,
      :accessory_2,
      :sword,
      :polearm,
      :dagger,
      :axe,
      :bow,
      :staff,
    ]
  end

  # @return [Array<Symbol>]
  def self.equipment_foreign_key_symbols
    return [
      :shield_id,
      :headgear_id,
      :body_armor_id,
      :accessory_1_id,
      :accessory_1_id,
      :sword_id,
      :polearm_id,
      :dagger_id,
      :axe_id,
      :bow_id,
      :staff_id,
    ]
  end

end
