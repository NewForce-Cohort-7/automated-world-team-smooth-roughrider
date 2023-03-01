import { siteList } from "./landmarkList.js";
import { introPrompt } from "./intro.js";
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

import { getIntro } from "./main.js";
const allIntro = getIntro()
for (const singleIntro of allIntro) {
    console.log(singleIntro)
}

// const parentHTMLElement = document.querySelector(".card")

// parentHTMLElement.innerHTML = siteList()

const parentHTMLElement2 = document.querySelector(".card")

parentHTMLElement2.innerHTML = introPrompt()

