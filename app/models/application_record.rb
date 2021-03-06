# @abstract
#   Subclasses should override/implement the following methods:
#
#   - {.icon_css_class}
#   - {#display_name}
class ApplicationRecord < ActiveRecord::Base

  include Trestle::Engine.routes.url_helpers
  include Lib::Helpers::Stripper

  self.abstract_class = true

  # https://github.com/jonhue/acts_as_favoritor
  acts_as_favoritable()

  # https://github.com/rubiety/nilify_blanks
  nilify_blanks()

  # https://github.com/kaminari/kaminari
  paginates_per(100)

  # https://github.com/mbleigh/acts-as-taggable-on
  acts_as_taggable_on(:tags)

  # ============================================================================
  # Attributes
  # ============================================================================

  # @!group Attributes

  # @!attribute metadata
  #   @return [Hash]

  # @!endgroup Attributes

  # =====================================================================
  # Associations
  # =====================================================================

  # @!group Associations

  # @!attribute hyperlinks
  #   @return [Array<Hyperlink>]
  has_many(
    :hyperlinks,
    as: :linkable,
    inverse_of: :linkable,
    class_name: "Hyperlink",
    dependent: :destroy,
  )
  accepts_nested_attributes_for(
    :hyperlinks,
    allow_destroy: true,
  )

  # @!endgroup Associations

  # ============================================================================
  # Class Methods
  # ============================================================================

  # @return [String]
  def self.display_name()
    return self.name.pluralize.gsub(/\B(?=[A-Z])/, " ")
  end

  # @return [Symbol]
  def self.custom_instance_name()
    return self.name.underscore.to_sym
  end

  # @return [String]
  def self.kind()
    return self.name
  end

  # @return [String]
  def self.icon_css_class()
    raise NotImplementedError
  end

  # # Override [human_attribute_name](https://api.rubyonrails.org/classes/ActiveModel/Translation.html#method-i-human_attribute_name)
  # #
  # # @param attribute [Symbol]
  # # @param _options [Hash]
  # # @return [String]
  # def self.human_attribute_name(attribute, _options = {})
  #   return attribute.to_s.split(".").pop.titleize()
  # end

  # ============================================================================
  # Instance Methods
  # ============================================================================

  # @return [String]
  def display_name()
    return " " unless self.persisted?
    return self&.name || " "
  end

  # @return [String]
  def kind()
    return self.class.kind()
  end

end
