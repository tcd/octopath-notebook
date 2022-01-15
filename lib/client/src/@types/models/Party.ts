import { ApplicationRecord } from "."

export class Party extends ApplicationRecord {
    public name?: string
    public description?: string
    public notes?: string
}
