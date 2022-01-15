import { ApplicationRecord } from "."

export class DamageType extends ApplicationRecord {
    public name: string
    public physical: boolean
    public elemental: boolean
    public game_order: boolean
    public is_standard: boolean
    public encoded_picture: string
}
