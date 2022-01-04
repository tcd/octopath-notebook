import { join } from "path"
import { packageDirectory } from "pkg-dir"
import { writeJsonFile } from "write-json-file"

import {
    positions,
    sideQuests,
    v1 as locations,
} from "./data/index.mjs"

const packageDir = await packageDirectory()
const outDir = join(packageDir, "out")

let numberOfPositions = Object.keys(positions).length
let numberOfSideQuests = Object.keys(sideQuests).length
let numberOfLocations = Object.keys(locations).length

console.log(numberOfPositions)
console.log(numberOfSideQuests)
console.log(numberOfLocations)

// const TITLE_PATTERN = /^<b>([A-Za-z, ']+)<\/b>/
// const DANGER_PATTERN = /Danger Level: (\d+)/

// for (const location of locations) {
//     let title = location.tooltipText.match(TITLE_PATTERN)
//     // console.log(title[1])
//     let dangerLevel = location.tooltipText.match(DANGER_PATTERN)
//     if (dangerLevel) {
//         console.log(dangerLevel[1])
//     }
// }
