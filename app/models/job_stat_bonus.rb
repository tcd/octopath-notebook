class JobStatBonus < ApplicationRecord

  # =====================================================================
  # Attributes
  # =====================================================================

  # @!group Attributes

  # @!attribute value
  #   @required
  #   @return [Decimal]
  validates(:value, presence: true)

  # @!endgroup Attributes

  # =====================================================================
  # Associations
  # =====================================================================

  # @!group Associations

  # @!attribute job
  #   @return [Job]
  belongs_to(:job, required: true)

  # @!attribute stat
  #   @return [Stat]
  belongs_to(:stat, required: true)

  # @!endgroup Associations

  # ==========================================================================
  # Scopes
  # ==========================================================================

  # @!group Scopes

  # @!method self.scope_for_trestle()
  #   @return [JobStatBonus::ActiveRecord_Relation]
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
    return "#{self.job.display_name} - #{self.stat.display_name}"
  end
end
