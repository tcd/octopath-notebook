import { ApplicationRecord } from "."

export class JobSkill extends ApplicationRecord {
    public name: string
    public job_name: string
    public in_game_description: string
    public job_order: number
    public divine_skill: boolean
    public sp_cost: number
    public target: string
    public effect_type: string
    public invocation_ration: number
    public defense_modifier: number
    public notes: string

    public boost_data: any
    public extra_data: any
}
