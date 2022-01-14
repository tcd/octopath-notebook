# character classes
class Job < ApplicationRecord

  # =====================================================================
  # Attributes
  # =====================================================================

  # @!group Attributes

  # @!attribute name
  #   @required
  #   @return [String]
  validates(:name, presence: true, uniqueness: true)

  # @!attribute primary
  #   @required
  #   @return [Boolean]

  # @!attribute secret
  #   @required
  #   @return [Boolean]

  # @!attribute game_order
  #   @required
  #   @return [Integer]

  # @!attribute encoded_picture
  #   @return [String]

  # @!endgroup Attributes

  # =====================================================================
  # Associations
  # =====================================================================

  # @!group Associations

  # @!attribute primary_character
  #   @return [Character]
  has_one(
    :primary_character,
    class_name: "Character",
    primary_key: "name",
    foreign_key: "primary_job_name",
  )

  # @!attribute job_skills
  #   @return [Array<JobSkill>]
  has_many(
    :job_skills,
    class_name: "JobSkill",
    primary_key: "name",
    foreign_key: "job_name",
  )

  # @!attribute job_support_skills
  #   @return [Array<JobSupportSkill>]
  has_many(
    :job_support_skills,
    class_name: "JobSupportSkill",
    primary_key: "name",
    foreign_key: "job_name",
  )

  # @!attribute job_stat_bonuses
  #   @return [Array<JobStatBonus>]
  has_many(:job_stat_bonuses)

  # @!attribute :party_characters
  #   @return [Array<PartyCharacter>]
  has_many(:party_characters)

  # @!endgroup Associations

  # ==========================================================================
  # Scopes
  # ==========================================================================

  # @!group Scopes

  # @!method self.scope_for_trestle()
  #   @return [Job::ActiveRecord_Relation]
  scope(:scope_for_trestle, -> { all() })

  # @!endgroup Scopes

  # ============================================================================
  # Class Methods
  # ============================================================================

  # @return [String]
  def self.icon_css_class()
    # return "mdi mdi-hard-hat"
    return "ra ra-aura"
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
