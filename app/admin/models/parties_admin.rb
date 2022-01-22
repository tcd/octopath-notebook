Trestle.resource(:parties) do

  extend Mixins::Shared

  menu do
    item(
      @admin.model.display_name(),
      icon: @admin.model.icon_css_class(),
      priority: -101,
    )
  end

  controller do

    # @return [void]
    def show()
      toolbar(:primary, { clear: true }) { |t| t.link(icon("mdi mdi-pencil"), admin.instance_path(instance, action: :edit)) }

      party = Party.includes(party_characters: [:character]).find(params[:id])

      gon.party              = Serializers::PartySerializer.render_as_json(party)
      gon.characters         = Serializers::CharacterSerializer.render_as_json(Character.all())
      gon.damage_types       = Serializers::DamageTypeSerializer.render_as_json(DamageType.all())
      gon.equipment          = Serializers::EquipmentSerializer.render_as_json(Equipment.all())
      gon.jobs               = Serializers::JobSerializer.render_as_json(Job.all())
      gon.job_skills         = JobSkill.all()
      gon.job_support_skills = JobSupportSkill.all()
      gon.stats              = Stat.all()

      super()
    end

    # @return [void]
    def edit()
      super()
    end

  end

end
