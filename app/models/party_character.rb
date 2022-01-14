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

  belongs_to(:shield,      foreign_key: :shield_id,     class_name: "Equipment", optional: true)
  belongs_to(:headgear,    foreign_key: :headgear_id,   class_name: "Equipment", optional: true)
  belongs_to(:body_armor,  foreign_key: :body_armor_id, class_name: "Equipment", optional: true)
  belongs_to(:accessory_1, foreign_key: :accessory_1,   class_name: "Equipment", optional: true)
  belongs_to(:accessory_2, foreign_key: :accessory_1,   class_name: "Equipment", optional: true)
  belongs_to(:sword,       foreign_key: :sword_id,      class_name: "Equipment", optional: true)
  belongs_to(:polearm,     foreign_key: :polearm_id,    class_name: "Equipment", optional: true)
  belongs_to(:dagger,      foreign_key: :dagger_id,     class_name: "Equipment", optional: true)
  belongs_to(:axe,         foreign_key: :axe_id,        class_name: "Equipment", optional: true)
  belongs_to(:bow,         foreign_key: :bow_id,        class_name: "Equipment", optional: true)
  belongs_to(:staff,       foreign_key: :staff_id,      class_name: "Equipment", optional: true)

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
  scope(:scope_for_trestle, -> { includes(:equipment) })

  # @!endgroup Scopes

  # ============================================================================
  # Class Methods
  # ============================================================================

  # @return [String]
  def self.icon_css_class()
    return "mdi mdi-set-all"
  end

end
