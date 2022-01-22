import {
    Character,
    DamageType,
    Equipment,
    Job,
    JobSupportSkill,
    Party,
    Stat,
} from "."

export interface GonData {
    party: Party
    characters: Character[]
    equipment: Equipment[]
    damage_types: DamageType[]
    jobs: Job[]
    job_support_skills: JobSupportSkill[]
    stats: Stat[],
}
