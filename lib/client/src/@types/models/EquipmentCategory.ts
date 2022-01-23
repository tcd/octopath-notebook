import { ApplicationRecord } from "."

export class EquipmentCategory extends ApplicationRecord {
    // =========================================================================
    // Attributes
    // =========================================================================
    public name: string
    public weapon: boolean
    public encoded_picture: string
}
