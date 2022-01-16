module Serializers
  # @abstract
  class BaseSerializer < Blueprinter::Base

    identifier(:id)

    fields(:kind)

    fields(:created_at, :updated_at)

    fields(:metadata)

  end
end
