declare namespace Octopath {

    export abstract class ApplicationRecord {
        public id?: number
        public created_at?: Date
        public updated_at?: Date
        public display_name?: string
        public metadata?: any
    }

    export class Character extends ApplicationRecord {
        public name: string
        public primary_job_name: string
        public encoded_picture: string
        // ---------------------------------------------------------------------
        public primary_job: Job
    }

    export class Equipment extends ApplicationRecord {
        public name: string
        public category_name: string
        public sell_price: number
        public other_effects: string

        public physical_attack: number
        public physical_defense: number
        public elemental_attack: number
        public elemental_defense: number
        public max_hp: number
        public max_sp: number
        public accuracy: number
        public speed: number
        public critical: number
        public evasion: number
    }

    export class EquipmentCategory extends ApplicationRecord {
        public name: string
        public weapon: boolean
        public encoded_picture: string
    }

    export class Job extends ApplicationRecord {
        public name: string
        public primary: boolean
        public secret: boolean
        public game_order: number
        public encoded_picture: string
        // ---------------------------------------------------------------------
        public weapons: string[]
    }

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

    export class JobSupportSkill extends ApplicationRecord {
        public name: string
        public job_name: string
        public unlock_order: number
        public one_per_party: boolean
        public short_description: string
        public in_game_description: string
        public notes: string
    }

    export class Party extends ApplicationRecord {
        public name?: string
        public description?: string
        public notes?: string
        // ---------------------------------------------------------------------
        public party_characters?: PartyCharacter[]
    }

    export class PartyCharacter extends ApplicationRecord {
        public name: string
        public description: string
        public notes: string

        public party_id: number
        public character_id: number
        public secondary_job_id: number

        public shield_id: number
        public headgear_id: number
        public body_armor_id: number
        public accessory_1_id: number
        public accessory_2_id: number

        public sword_id: number
        public polearm_id: number
        public dagger_id: number
        public axe_id: number
        public bow_id: number
        public staff_id: number

        // ---------------------------------------------------------------------

        public character?: Character
    }

    export class Stat extends ApplicationRecord {
        public name: string
        public full_name: string
        public description: string
        public encoded_picture: string
    }

}
