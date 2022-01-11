# an active ability associated with a given job
class JobSkill < ApplicationRecord

  paginates_per(150)

  JP_COSTS = [
    0,
    0,
    30,
    100,
    500,
    1000,
    3000,
    5000,
  ].freeze

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

  # @!attribute in_game_description
  #   @required
  #   @return [String]
  validates(:in_game_description, presence: true)

  # @!attribute job_order
  #   @required
  #   @return [Integer]
  validates(:job_order, presence: true)

  # @!attribute divine_skill
  #   @required
  #   @default_value false
  #   @return [Boolean]
  validates(:divine_skill, inclusion: { in: [true, false], message: "%{value} must be a boolean value ('true' or 'false')" })

  # @!attribute sp_cost
  #   @required
  #   @default_value 0
  #   @return [Integer]
  validates(:sp_cost, presence: true)

  # @!attribute target
  #   @required
  #   @return [String]
  validates(:target, presence: true)

  # @!attribute effect_type
  #   @required
  #   @return [String]
  validates(:effect_type, presence: true)

  # @!attribute notes
  #   @return [String]

  # @!attribute invocation_ratio
  #   @return [Integer]

  # @!attribute defense_modifier
  #   @return [Decimal]

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
    primary_key: "name",
    required: true,
  )

  # @!endgroup Associations

  # ==========================================================================
  # Scopes
  # ==========================================================================

  # @!group Scopes

  # @!method self.scope_for_trestle()
  #   @return [JobSkill::ActiveRecord_Relation]
  scope(:scope_for_trestle, -> { includes(:job) })

  # ----------------------------------------------------------------------------

  # @!method self.divine()
  #   @return [JobSkill::ActiveRecord_Relation]
  scope(:divine, -> { where(divine_skill: true) })

  # ----------------------------------------------------------------------------

  # @!method self.divine()
  #   @return [JobSkill::ActiveRecord_Relation]
  scope(:problems, -> { where.not(effect_type: DamageType.pluck(:name)) })

  # @!endgroup Scopes

  # ============================================================================
  # Class Methods
  # ============================================================================

  # @return [String]
  def self.icon_css_class()
    return "mdi mdi-octagram"
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
