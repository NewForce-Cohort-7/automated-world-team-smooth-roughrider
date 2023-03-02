// import code 
import {getLandmarks} from './landmarkDB.js'

let allLandmarks = getLandmarks()

for (let singleLandmark of allLandmarks) {
    console.log(singleLandmark)
}

// Import the FishList function from the correct module
import {LandmarkList} from './landmarkList.js'

/*
    CSS SELECTOR
 */
let parentHTMLElement = document.querySelector(".card-container")


parentHTMLElement.innerHTML = LandmarkList()