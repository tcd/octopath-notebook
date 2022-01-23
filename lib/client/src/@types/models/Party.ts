import { ApplicationRecord, PartyCharacter } from "."

export class Party extends ApplicationRecord {
    // =========================================================================
    // Attributes
    // =========================================================================
    public name?: string
    public description?: string
    public notes?: string
    // =========================================================================
    // Associations
    // =========================================================================
    public party_characters?: PartyCharacter[]
}
