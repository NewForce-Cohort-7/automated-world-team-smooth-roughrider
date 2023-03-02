// import {egyptCelebrities, egyptLand, egyptLocations} from './objects.js'
import {Landmarks} from './land.js'
// import {egyptLand} from './objects.js'
import {CelebrityList} from './celebrities.js'
// import {egyptLand} from './objects.js'
import {LocationList} from './city.js'
// let allCelebrities = egyptCelebrities()
// let allLandmarks = egyptLand()
// let allLocationLists = egyptLocations()

// for (let singleCelebrity of allCelebrities) {
//     console.log(singleCelebrity)
// }

// for (let singleLocationList of allLocationLists) {
//     console.log(singleCelebrity)
// }


// for (let singleLandmark of allLandmarks) {
//     console.log(singleCelebrity)}



// Import the FishList function from the correct module


/*
    What is the CSS selector for the element where you
    want to display the fish?

    (HTML container)

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
let parentHTMLElement = document.querySelector(".celeb-container")
let parentcardHTMLElement = document.querySelector(".card-container")
let parentHTMLElement2 = document.querySelector(".intro-text")


parentHTMLElement.innerHTML = CelebrityList()
parentcardHTMLElement.innerHTML = Landmarks()
parentHTMLElement2.innerHTML = LocationList()