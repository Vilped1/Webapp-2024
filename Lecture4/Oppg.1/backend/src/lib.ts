import { readFile, writeFile } from "node:fs/promises"

export async function getData() {
    const data = await readFile('./src/data.json', "utf-8")
    const parsedData = JSON.parse(data)
    return parsedData 
}

// export async function updateData(newData) {
//     await writeFile('./src/data.json', JSON.stringify(newData))
// }