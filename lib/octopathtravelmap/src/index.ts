import { join } from "path"
import { writeFileSync } from "fs"
import { parse } from "json2csv"


import { LocationData } from "@types"
import { jsonToTsv, outFolder } from "@util"
import { positions, sideQuests } from "./data"
import { locations } from "./data/locations/locations-v5"
import moment from "moment"

const checkNumbers = (): void => {
    let numberOfPositions  = Object.keys(positions).length
    let numberOfSideQuests = Object.keys(sideQuests).length
    let numberOfLocations  = Object.keys(locations).length

    console.log(numberOfPositions)
    console.log(numberOfSideQuests)
    console.log(numberOfLocations)
}


// const parseLocationData = (): any => {
//     let outData = []
//     for (const location of locations) {
//         outData.push(new LocationData(location).ToJson())
//     }
//     return outData
// }

const main = async () => {
    const timestamp = moment().format("MM-DD-YYYY--HH:mm:ss")
    const outPath = join(outFolder, `LocationData.${timestamp}.tsv`)
    const data = locations.map(x => new LocationData(x).ToJson())
    const outData = JSON.stringify(data, null, 4)
    const csv = jsonToTsv(data)
    // const outPath = join(packageDir, "out", "LocationData.json")
    // await writeJsonFile.writeJsonFile(outPath, outData)
    writeFileSync(outPath, csv)
    console.log(`file written: ${outPath}`)
}

try {
    main()
} catch (error) {
   console.log(error)
   process.exit(1)
}

