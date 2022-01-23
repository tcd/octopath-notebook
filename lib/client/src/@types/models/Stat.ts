import { ApplicationRecord } from "."

export class Stat extends ApplicationRecord {
    // =========================================================================
    // Attributes
    // =========================================================================
    public name: string
    public full_name: string
    public description: string
    public encoded_picture: string
}
