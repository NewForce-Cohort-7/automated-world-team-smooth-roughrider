// chapter 9 - exporting 
// import code 
import {getCelebrities} from './celebDB.js'

let allCelebrities = getCelebrities()

for (let singleCelebrity of allCelebrities) {
    console.log(singleCelebrity)
}

// Import the FishList function from the correct module
import {CelebrityList} from './celebList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    (HTML container)

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
let parentHTMLElement = document.querySelector(".celeb-container")


parentHTMLElement.innerHTML = CelebrityList()