import {
    Character,
    DamageType,
    Equipment,
    EquipmentCategory,
    Job,
    JobSupportSkill,
    Party,
    Stat,
} from "."

export interface GonData {
    party: Party
    characters: Character[]
    equipment: Equipment[]
    equipment_categories: EquipmentCategory[]
    damage_types: DamageType[]
    jobs: Job[]
    job_support_skills: JobSupportSkill[]
    stats: Stat[],
}
