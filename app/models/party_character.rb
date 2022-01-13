class PartyCharacter < ApplicationRecord

  # =====================================================================
  # Attributes
  # =====================================================================

  # @!group Attributes

  # @!endgroup Attributes

  # =====================================================================
  # Associations
  # =====================================================================

  # @!group Associations

  # @!attribute party
  #   @return [Party]
  belongs_to(:party, required: true)
  validates_associated(:party)

  # @!attribute character
  #   @return [Character]
  belongs_to(:character, required: true)

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

  # =====================================================================
  # Instance Methods
  # =====================================================================

  # @return [String]
  def display_name()
    return " " unless self.persisted?()
    return "#{party&.display_name} - #{character&.display_name}"
  end
end
