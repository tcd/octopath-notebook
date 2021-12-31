class JobSupportSkill < ApplicationRecord

  # =====================================================================
  # Attributes
  # =====================================================================

  # @!group Attributes

  # @!attribute name
  #   @required
  #   @return [String]
  validates(:name, presence: true, uniqueness: true)

  # @!attribute job_name
  #   @required
  #   @return [String]
  validates(:job_name, presence: true)

  # @!attribute unlock_order
  #   @required
  #   @return [Integer]
  validates(:unlock_order, presence: true)

  # @!attribute one_per_party
  #   @required
  #   @return [Boolean]
  validates(:one_per_party, presence: true)

  # @!attribute short_description
  #   @required
  #   @return [String]
  validates(:short_description, presence: true)

  # @!attribute in_game_description
  #   @required
  #   @return [String]
  validates(:in_game_description, presence: true)

  # @!attribute notes
  #   @return [String]

  # @!endgroup Attributes

  # =====================================================================
  # Associations
  # =====================================================================

  # @!group Associations

  # @!attribute job
  #   @return [Job]
  belongs_to(
    :job,
    class_name: "Job",
    foreign_key: "job_name",
    required: true,
  )

  # @!endgroup Associations

  # ==========================================================================
  # Scopes
  # ==========================================================================

  # @!group Scopes

  # @!method self.scope_for_trestle()
  #   @return [JobSupportSkill::ActiveRecord_Relation]
  # scope(:scope_for_trestle, -> { all() })

  # @!endgroup Scopes

  # ============================================================================
  # Class Methods
  # ============================================================================

  # @return [String]
  def self.icon_css_class()
    return "mdi mdi-octagram-outline"
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
