import { parse, Options } from "json2csv"

export const jsonToTsv = (json: any[]) => {
    const notUniqueKeys = json.flatMap(x => Object.keys(x))
    const uniqueKeys = [...new Set(notUniqueKeys)]
    const opts: Options<any> = {
        fields: uniqueKeys,
        delimiter: "\t",
        quote: "",
    }
    const csv = parse(json, opts);
    return csv
}


