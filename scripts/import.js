import { getLandmarks } from "./main.js";

const allLandmarks = getLandmarks()

for (const singleLandmark of allLandmarks) {
    console.log(singleLandmark)
}

import { getCelebs } from "./main.js";

const allCelebs = getCelebs()

for (const singleCeleb of allCelebs) {
    console.log(singleCeleb)
}

import { getCities } from "./main.js";

const allCities = getCities()

for (const singleCity of allCities) {
    console.log(singleCity)
}