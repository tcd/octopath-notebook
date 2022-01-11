# characters (currently only primary characters) in Octopath Traveler
class Character < ApplicationRecord

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

  # @!attribute primary_job_name
  #   @required
  #   @return [String]
  validates(:primary_job_name, presence: true)

  # @!attribute starting_town_name
  #   @required
  #   @return [String]
  validates(:starting_town_name, presence: true)

  # @!attribute native_town_name
  #   @return [String]

  # @!attribute encoded_picture
  #   @return [String]

  # @!endgroup Attributes

  # =====================================================================
  # Associations
  # =====================================================================

  # @!group Associations

  # @!attribute primary_job
  #   @return [Job]
  belongs_to(
    :primary_job,
    class_name: "Job",
    foreign_key: "primary_job_name",
    primary_key: "name",
    required: true,
  )

  # ---------------------------------------------------------------------

  # @!attribute starting_town
  #   @return [Town]
  belongs_to(
    :starting_town,
    class_name: "Town",
    foreign_key: "starting_town_name",
    primary_key: "name",
    required: true,
  )

  # @!attribute native_town
  #   @return [Town]
  belongs_to(
    :native_town,
    class_name: "Town",
    foreign_key: "native_town_name",
    primary_key: "name",
    optional: true,
  )

  # @!endgroup Associations

  # ==========================================================================
  # Scopes
  # ==========================================================================

  # @!group Scopes

  # @!method self.scope_for_trestle()
  #   @return [Character::ActiveRecord_Relation]
  scope(:scope_for_trestle, -> { includes(:primary_job).order(id: :asc) })

  # @!endgroup Scopes

  # ============================================================================
  # Class Methods
  # ============================================================================

  # @return [String]
  def self.icon_css_class()
    # return "mdi mdi-account-star"
    return "ra ra-player"
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
