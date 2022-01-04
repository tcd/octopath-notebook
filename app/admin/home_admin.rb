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
        { model: Job,             admin: JobsAdmin             },
        { model: Region,          admin: RegionsAdmin          },
        { model: JobSupportSkill, admin: JobSupportSkillsAdmin },
        # { model: Hyperlink,  admin: HyperlinksAdmin  },
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
