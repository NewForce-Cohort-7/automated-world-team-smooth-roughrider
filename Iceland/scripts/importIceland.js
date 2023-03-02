
import {icelandLandmarks} from "./iceland.js";
import { icelandCelebrities } from "./iceland.js";
import { icelandCities } from "./iceland.js";
import {celebsList} from "./icelandCelebs.js";
import {landmarksList} from "./landmarksIceland.js";
import {cityList} from "./citiesIceland.js";




//landmarks


const allLandmarks = icelandLandmarks()

for (const singleLandmark of allLandmarks) {
    console.log(singleLandmark)
}

//celebrities


const allCelebs = icelandCelebrities()

for (const singleCeleb of allCelebs) {
    console.log(singleCeleb)
}


//cities

const allCities = icelandCities()

for (const singleCity of allCities) {
   console.log(singleCity)
}


//HTML 

const parentHTMLElementLandmarks = document.querySelector(".card-container")

parentHTMLElementLandmarks.innerHTML = landmarksList()

const parentHTMLElementCities = document.querySelector(".city-container")

parentHTMLElementCities.innerHTML = cityList()

const parentHTMLElementCelebs = document.querySelector(".celeb-container")

parentHTMLElementCelebs.innerHTML = celebsList()