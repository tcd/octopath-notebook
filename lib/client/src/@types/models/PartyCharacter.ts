import { ApplicationRecord, Character } from "."

export class PartyCharacter extends ApplicationRecord {

    // =========================================================================
    // Attributes
    // =========================================================================

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

    // =========================================================================
    // Associations
    // =========================================================================

    public character?: Character

}
