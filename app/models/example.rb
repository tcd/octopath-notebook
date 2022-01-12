class Example < ApplicationRecord

  self.primary_key = "name"

  # @!attribute name
  #   @required
  #   @return [String]
  validates(:name, presence: true, uniqueness: true)

  scope(:scope_for_trestle, -> { all() })

  def self.icon_css_class()
    return "fa fa-star"
  end

end
