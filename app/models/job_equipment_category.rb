# The type(s) of equipment a given Job can use.
class JobEquipmentCategory < ApplicationRecord

  # =====================================================================
  # Associations
  # =====================================================================

  # @!group Associations

  # @!attribute job
  #   @return [Job]
  belongs_to(:job, required: true)

  # @!attribute equipment_category
  #   @return [EquipmentCategory]
  belongs_to(:equipment_category, required: true)

  # @!endgroup Associations

  # ==========================================================================
  # Scopes
  # ==========================================================================

  # @!group Scopes

  # @!method self.scope_for_trestle()
  #   @return [JobEquipmentCategory::ActiveRecord_Relation]
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
    return "use strings as foreign keys bitch"
  end
end
