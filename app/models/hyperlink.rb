# a url associated with a given resource
class Hyperlink < ApplicationRecord

  # =====================================================================
  # Attributes
  # =====================================================================

  # @!group Attributes

  # @!attribute linkable_type
  #   @required
  #   @return [String]

  # @!attribute linkable_id
  #   @required
  #   @return [Integer]

  # @!attribute url
  #   @required
  #   @return [String]
  validates(:url, presence: true, uniqueness: true)

  # @!attribute title
  #   @required
  #   @return [String]

  # @!attribute description
  #   @return [String]

  # @!attribute website_name
  #   @return [String]

  # @!attribute sort_order
  #   @default_value 1_000
  #   @return [Integer]

  # @!endgroup Attributes

  # =====================================================================
  # Associations
  # =====================================================================

  # @!group Associations

  # @!attribute linkable
  #   @return [ApplicationRecord]
  belongs_to(:linkable, polymorphic: true)

  # @!endgroup Associations

  # ==========================================================================
  # Scopes
  # ==========================================================================

  # @!group Scopes

  # @!method self.scope_for_trestle()
  #   @return [Hyperlink::ActiveRecord_Relation]
  scope(:scope_for_trestle, -> { includes(:linkable) })

  # @!endgroup Scopes

  # ============================================================================
  # Class Methods
  # ============================================================================

  # @return [String]
  def self.icon_css_class()
    return "mdi mdi-link-variant"
  end

  # =====================================================================
  # Instance Methods
  # =====================================================================

  # @return [String]
  def display_name()
    return " " unless self.persisted?()
    return self.title || self.url
  end

  # @return [String]
  def alt_display_name()
    return self.display_name() if self.website_name.blank?()
    return "#{self.title} (#{self.website_name})"
  end

  # @return [String]
  def computed_linkable_id()
    return self.linkable_type + self.linkable_id.to_s
  end

end
