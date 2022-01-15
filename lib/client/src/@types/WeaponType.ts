import { ApplicationRecord } from "."

export class WeaponType extends ApplicationRecord {
    public singular_name: string
    public plural_name: string
    public encoded_picture: string
}
