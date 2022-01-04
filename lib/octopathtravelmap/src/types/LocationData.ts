import { CITY_NAMES, SHRINE_NAMES, PRIMARY_SHRINE_NAMES, positions } from "@data"
import { compact } from "@util"
import { Position, RawLocationData } from "@types"

export interface NewLocationData {
    id?: string
    title?: string
    danger_level?: number | null
    purple_chest?: string
    position?: Position
    story?: string
    TooltipTextLines?: string[]
    OtherTextLines?: string[]
    is_city?: boolean
    is_shrine?: boolean
    x?: number
    y?: number
    relative_directions?: any
}

const TITLE_PATTERN = /^<b>([A-Za-z, ']+)<\/b>/
const DANGER_PATTERN = /Danger Level: (\d+)/
const DIRECTION_PATTERN = /<b>(?<direction>(Northeast|Northwest|Southeast|Southwest|North|East|South|West)):<\/b>\s(?<destination>[a-zA-Z ']+)(?:(?:\s\|\s)|(?:",)|(?:<br))/mg

export class LocationData {

    public newData: NewLocationData
    public rawData: RawLocationData

    public dangerLevelSet: boolean

    constructor(rawData: RawLocationData) {
        this.dangerLevelSet = false
        this.rawData = rawData
        this.newData = {}
        this.parse()
    }

    public ToJson(): any {
        // const output: any = {}
        // const compactRawData = compact(this.rawData)
        const compactNewData = compact(this.newData)
        // output.rawData = compactRawData
        // output.newData = compactNewData
        const output = compactNewData
        return output
    }

    private parse(): void {
        this.parseTitle()
        this.parseDangerLevel()
        this.parsePosition()
        this.parseRelativeDirections()
        // this.newData.TooltipTextLines = this.rawData.tooltipText?.split(/<br\s*\/?>/)
        // this.newData.OtherTextLines = this.rawData.otherText?.split(/<br\s*\/?>/)
        this.newData.id = `${this.newData.title} - ${this.newData.danger_level}`
    }

    private parseTitle(): void {
        let titleMatches = this.rawData.tooltipText?.match(TITLE_PATTERN) || null

        if (titleMatches == null) {
            return
        }
        if (!(titleMatches?.length > 0)) {
            return
        }

        const title = titleMatches[1]
        this.newData.title = title

        if (CITY_NAMES.includes(title)) {
            this.newData.is_city = true
        } else {
            this.newData.is_city = false
        }

        if (SHRINE_NAMES.includes(title)) {
            this.newData.is_shrine = true
        } else {
            this.newData.is_shrine = false
        }
    }

    private parseDangerLevel(): void {
        if (this.newData.is_city) {
            this.newData.danger_level = 0
            return
        }

        if (this.newData.is_shrine && PRIMARY_SHRINE_NAMES.includes(this.newData.title as string)) {
            this.newData.danger_level = 0
            return
        }

        let dangerLevel = this.rawData.tooltipText?.match(DANGER_PATTERN) || null

        if (dangerLevel && dangerLevel?.length > 0) {
            this.newData.danger_level = parseInt(dangerLevel[1])
        } else {
            this.newData.danger_level = null
        }
    }

    private parsePosition(): void {
        const position = positions[this.rawData.position as string]
        if (position) {
            this.newData.x = position[0]
            this.newData.y = position[1]
        }
    }

    private parseRelativeDirections(): void {
        let directions: any = {}
        let match
        while ((match = DIRECTION_PATTERN.exec(this.rawData.tooltipText as string)) !== null) {
            if (match.groups) {
                let { direction, destination } = match.groups
                directions[direction] = destination
            }
        }
        this.newData.relative_directions = directions
    }

}
