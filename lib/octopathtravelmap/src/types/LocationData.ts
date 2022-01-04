import { CITY_NAMES, SHRINE_NAMES, positions } from "@data"
import { compact } from "@util"
import { Position, RawLocationData } from "@types"

export interface NewLocationData {
    ID?: string
    Title?: string
    DangerLevel?: number | null
    PurpleChest?: string
    Position?: Position
    Story?: string
    TooltipTextLines?: string[]
    OtherTextLines?: string[]
    IsCity?: boolean
    IsShrine?: boolean
    X?: number
    Y?: number
}

const TITLE_PATTERN = /^<b>([A-Za-z, ']+)<\/b>/
const DANGER_PATTERN = /Danger Level: (\d+)/

export class LocationData {

    public newData: NewLocationData
    public rawData: RawLocationData

    constructor(rawData: RawLocationData) {
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
        // this.newData.TooltipTextLines = this.rawData.tooltipText?.split(/<br\s*\/?>/)
        // this.newData.OtherTextLines = this.rawData.otherText?.split(/<br\s*\/?>/)
        this.newData.ID = `${this.newData.Title} - ${this.newData.DangerLevel}`
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
        this.newData.Title = title

        if (CITY_NAMES.includes(title)) {
            this.newData.IsCity = true
        } else {
            this.newData.IsCity = false
        }

        if (SHRINE_NAMES.includes(title)) {
            this.newData.IsShrine = true
        } else {
            this.newData.IsShrine = false
        }
    }

    private parseDangerLevel(): void {
        if (this.newData.IsCity) {
            this.newData.DangerLevel = 0
            return
        }
        let dangerLevel = this.rawData.tooltipText?.match(DANGER_PATTERN) || null
        if (dangerLevel && dangerLevel?.length > 0) {
            this.newData.DangerLevel = parseInt(dangerLevel[1])
        } else {
            this.newData.DangerLevel = null
        }
    }

    private parsePosition(): void {
        const position = positions[this.rawData.position as string]
        if (position) {
            this.newData.X = position[0]
            this.newData.Y = position[1]
        }
    }

}
