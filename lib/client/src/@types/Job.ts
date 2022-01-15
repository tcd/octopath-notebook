import { ApplicationRecord } from "."

export class Job extends ApplicationRecord {
    public name: string
    public primary: boolean
    public secret: boolean
    public game_order: number
    public encoded_picture: string
    public weapons: string[]
}
