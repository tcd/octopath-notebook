import { join } from "path"
import { packageDirectory } from "pkg-dir"
import { writeJsonFile } from "write-json-file"


import { positions } from "./data/positions.mjs"
import { sideQuests } from "./data/sidequests.mjs"
import { locations as v1 } from "./data/locations-v1.mjs"

let numberOfPositions = Object.keys(positions).length
let numberOfSideQuests = Object.keys(sideQuests).length
let numberOfLocationsV1 = Object.keys(v1).length

const packageDir = await packageDirectory()
const outDir = join(packageDir, "out")

// console.log(numberOfLocationsV1)

const TITLE_PATTERN = /^<b>([A-Za-z, ']+)<\/b>/
const DANGER_PATTERN = /Danger Level: (\d+)/

for (const location of v1) {
    let title = location.tooltipText.match(TITLE_PATTERN)
    // console.log(title[1])
    let dangerLevel = location.tooltipText.match(DANGER_PATTERN)
    if (dangerLevel) {
        console.log(dangerLevel[1])
    }
}
