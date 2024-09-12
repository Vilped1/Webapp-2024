import { readFile, writeFile } from "node:fs/promises";
import { Weather } from "./type";

export async function getWeatherData() {
    const data = await readFile('./data/weather.json', "utf-8")
    const paredData = JSON.parse(data) as Weather[]
    return paredData
}

// !! Uten type
// export async function getWeatherData() {
//     const data = await readFile('./data/weather.json', "utf-8")
//     const paredData = JSON.parse(data)
//     return paredData
// }

export async function updateWeatherData(newData: Weather[]) {
    await writeFile("./data/weather.json", JSON.stringify(newData))
}