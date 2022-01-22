import { ApplicationRecord } from "."

export class JobSupportSkill extends ApplicationRecord {
    public name: string
    public job_name: string
    public unlock_order: number
    public one_per_party: boolean
    public short_description: string
    public in_game_description: string
    public notes: string
}
