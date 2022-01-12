namespace(:misc) do

  task(fix_damage_types: :environment) do
    damage_types = DamageType.pluck(:name)
    problems = JobSkill.where.not(effect_type: damage_types)
  end

end
