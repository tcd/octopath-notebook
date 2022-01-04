import { compact } from "@util"
import { Position } from "."

export interface RawLocationData {
    variableName?: string
    position?: string
    icon?: string
    tooltipText?: string
    otherText?: string
}

export interface NewLocationData {
    Title?: string
    DangerLevel?: number
    PurpleChest?: string
    Position?: Position
    Story?: string
    TooltipTextLines?: string[]
    OtherTextLines?: string[]
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
        // output.rawData = compact(this.rawData)
        // output.newData = compact(this.newData)
        // return output
        return compact(this.newData)
    }

    private parse(): void {
        this.parseTitle()
        this.parseDangerLevel()
        // this.newData.TooltipTextLines = this.rawData.tooltipText?.split(/<br\s*\/?>/)
        // this.newData.OtherTextLines = this.rawData.otherText?.split(/<br\s*\/?>/)
    }

    private parseTitle(): void {
        let title = this.rawData.tooltipText?.match(TITLE_PATTERN) || null
        if (title != null && title?.length > 0) {
            this.newData.Title = title[1]
        }
    }

    private parseDangerLevel(): void {
        let dangerLevel = this.rawData.tooltipText?.match(DANGER_PATTERN) || null
        if (dangerLevel && dangerLevel?.length > 0) {
            this.newData.DangerLevel = parseInt(dangerLevel[1])
        }
    }

}
