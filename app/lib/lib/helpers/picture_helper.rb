module Lib
  module Helpers
    # Methods for accessing ActiveStorage objects.
    module PictureHelper

      # @return [Boolean]
      def has_picture?()
        return self.picture.attached?()
      end

      # @return [String]
      def picture_url()
        if Rails.application.config.active_storage.service == :amazon
          return amazon_picture()
        elsif Rails.application.config.active_storage.service == :local
          return local_picture()
        else
          return nil
        end
      end

      # @return [String]
      def local_picture()
        if self.picture.attached?()
          return Rails.application.routes.url_helpers.url_for(self.picture)
        else
          return nil
        end
      end

      # @return [String]
      def amazon_picture()
        if self.picture.attachment
          return Lib::Util.get_credential(:aws, :cloudfront_url) + "/" + self.picture.attachment.key
          # return self.picture.attachment.service_url&.split("?")&.first
        else
          return nil
        end
      end

    end
  end
end
