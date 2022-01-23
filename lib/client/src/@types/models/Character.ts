import { ApplicationRecord, Job } from "."

export class Character extends ApplicationRecord {

    // =========================================================================
    // Attributes
    // =========================================================================

    public name: string
    public primary_job_name: string
    public encoded_picture: string

    // =========================================================================
    // Associations
    // =========================================================================

    public primary_job: Job

}
