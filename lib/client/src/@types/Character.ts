import { ApplicationRecord } from "."

export class Character extends ApplicationRecord {
    public name: string
    public primary_job_name: string
    public encoded_picture: string
}
