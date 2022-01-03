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

  # @!endgroup Attributes

  # =====================================================================
  # Associations
  # =====================================================================

  # @!group Associations

  # @!attribute job_support_skills [rw]
  #   @return [Array<JobSupportSkill>]
  has_many(
    :job_support_skills,
    class_name: "JobSupportSkill",
    primary_key: "name",
    foreign_key: "job_name",
  )

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
    return "mdi mdi-hard-hat"
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
