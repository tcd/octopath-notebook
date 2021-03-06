class Stat < ApplicationRecord

  # =====================================================================
  # Attributes
  # =====================================================================

  # @!group Attributes

  # @!attribute name
  #   @required
  #   @return [String]
  validates(:name, presence: true, uniqueness: true)

  # @!attribute full_name
  #   @required
  #   @return [String]
  validates(:full_name, presence: true, uniqueness: true)

  # @!attribute description
  #   @required
  #   @return [String]
  validates(:description, presence: true)

  # @!attribute encoded_picture
  #   @return [String]

  # @!endgroup Attributes

  # =====================================================================
  # Associations
  # =====================================================================

  # @!group Associations

  # @!attribute job_stat_bonuses
  #   @return [Array<JobStatBonus>]
  has_many(:job_stat_bonuses, inverse_of: :stat)

  # @!attribute jobs
  #   @return [Array<Job>]
  has_many(:jobs, through: :job_stat_bonuses)

  # @!endgroup Associations

  # ==========================================================================
  # Scopes
  # ==========================================================================

  # @!group Scopes

  # @!method self.scope_for_trestle()
  #   @return [Stat::ActiveRecord_Relation]
  scope(:scope_for_trestle, -> { all() })

  # @!endgroup Scopes

  # ============================================================================
  # Class Methods
  # ============================================================================

  # @return [String]
  def self.icon_css_class()
    return "mdi mdi-chart-bar-stacked"
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
