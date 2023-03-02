//intro

import { icelandIntro } from "./iceland.js";

const allIntro = icelandIntro()

for (const singleIntro of allIntro) {
    console.log(singleIntro)
}


//landmarks
import { icelandLandmarks } from "./iceland.js";

const allLandmarks = icelandLandmarks()

for (const singleLandmark of allLandmarks) {
    console.log(singleLandmark)
}

//celebrities

import { icelandCelebrities } from "./iceland.js";

const allCelebs = icelandCelebrities()

for (const singleCeleb of allCelebs) {
    console.log(singleCeleb)
}


//cities
import { icelandCities } from "./iceland";

const allCities = icelandCities()

for (const singleCity of allCities) {
    console.log(singleCity)
}


//HTML 
const parentHTMLElement = document.querySelector(".card")

parentHTMLElement.innerHTML = icelandIntro()

const parentHTMLElement = document.querySelector(".card")

parentHTMLElement.innerHTML = icelandLandmarks()

const parentHTMLElement = document.querySelector(".card")

parentHTMLElement.innerHTML = icelandCities()

const parentHTMLElement = document.querySelector(".card")

parentHTMLElement.innerHTML = icelandCelebrities()