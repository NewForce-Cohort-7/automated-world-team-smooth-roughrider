// chapter 9 - exporting 
// import code 
import {getLandmarks} from './landmarkDB.js'

let allLandmarks = getLandmarks()

for (let singleLandmark of allLandmarks) {
    console.log(singleLandmark)
}

// Import the FishList function from the correct module
import {LandmarkList} from './landmarkList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    (HTML container)

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
let parentHTMLElement = document.querySelector(".card-container")


parentHTMLElement.innerHTML = LandmarkList()