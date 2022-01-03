import { join } from "path"
import { packageDirectory } from "pkg-dir"

import { positions } from "./data/positions.mjs"
import { sideQuests } from "./data/sidequests.mjs"

let numberOfPositions = Object.keys(positions).length
let numberOfSideQuests = Object.keys(sideQuests).length

const packageDir = await packageDirectory()
const outDir = join(packageDir, "out")

console.log(numberOfPositions)
console.log(numberOfSideQuests)
console.log(outDir)
