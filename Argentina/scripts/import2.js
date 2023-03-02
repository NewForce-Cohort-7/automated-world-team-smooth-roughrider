import { getCelebs } from "./main.js";

let allCelebs = getCelebs()

for (let singleCeleb of allCelebs) {
    console.log(singleCeleb)
}


import { celebList } from "./celebList.js";


let parentHTMLElement3 = document.querySelector(".celeb-container")

parentHTMLElement3.innerHTML = celebList()




import { getLandmarks } from "./main.js";

let allLandmarks = getLandmarks()

for (const singleLandmark of allLandmarks) {
    console.log(singleLandmark)
}

import { siteList } from "./landmarkList.js";

let parentHTMLElement4 = document.querySelector(".card-container")

parentHTMLElement4.innerHTML = siteList()