require "test_helper"

module Tests
  module Models
    class JobSkillTest < ActiveSupport::TestCase

      setup do
        @model         = JobSkill
        @initial_count = @model.count()
      end

      test "that there are fixtures" do
        skip()
        assert(@initial_count > 0)
      end

      test ".icon_css_class" do
        refute_nil(@model.icon_css_class())
      end

      test "#display_name" do
        skip()
        entity = @model.first()
        refute_nil(entity.display_name())
      end

    end
  end
end
