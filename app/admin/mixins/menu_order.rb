module Mixins
  module MenuOrder
    # @return [Hash]
    OPTIONS = {
      "Character"         => { priority: -99,   group: nil    },
      "Equipment"         => { priority: -95,   group: nil    },
      "Job"               => { priority: -98,   group: nil    },
      "JobSkill"          => { priority: -97,   group: nil    },
      "JobSupportSkill"   => { priority: -96,   group: nil    },
      "Party"             => { priority: -101,  group: nil    },
      "Region"            => { priority: 0,     group: nil    },
      "Stat"              => { priority: 100,   group: :stats },
      "EquipmentCategory" => { priority: :last, group: :stats },
      "DamageType"        => { priority: :last, group: :stats },
      "WeaponType"        => { priority: :last, group: :stats },
      "Example"           => { priority: :last, group: :other },
      "Hyperlink"         => { priority: :last, group: :other },
    }.freeze()
  end
end
