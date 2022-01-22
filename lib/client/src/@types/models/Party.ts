import { ApplicationRecord, PartyCharacter } from "."

export class Party extends ApplicationRecord {
    public name?: string
    public description?: string
    public notes?: string

    public party_characters?: PartyCharacter[]
}
