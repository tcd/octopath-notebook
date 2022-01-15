import { ApplicationRecord } from "."

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
