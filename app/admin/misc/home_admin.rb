Trestle.admin(:home) do

  menu do
    item(
      :home,
      icon: "mdi mdi-home",
      priority: :first,
    )
  end

  controller do

    # @return [void]
    def index()
      @admins = [
        { model: Character,       admin: CharactersAdmin       },
        { model: Equipment,       admin: EquipmentAdmin        },
        { model: Job,             admin: JobsAdmin             },
        { model: JobSkill,        admin: JobSkillsAdmin        },
        { model: JobSupportSkill, admin: JobSupportSkillsAdmin },
        { model: Region,          admin: RegionsAdmin          },
        # { model: Hyperlink,  admin: HyperlinksAdmin  },
        # { model: DamageType,    admin: DamageTypesAdmin    },
        # { model: EquipmentType, admin: EquipmentTypesAdmin },
      ]
      @models = @admins.map do |a|
        {
          link:         a[:admin].path(),
          title:        a[:model].name().pluralize(),
          count:        a[:model].count(),
          icon_classes: a[:model].icon_css_class(),
        }
      end
      @links = [
        { title: "Octopath Traveler Map (interactive)", url: "http://www.octopathtravelmap.com/" },
      ]
    end

  end

end
