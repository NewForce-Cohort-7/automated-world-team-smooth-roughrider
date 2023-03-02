// import code 
import {getCelebrities} from './celebDB.js'

let allCelebrities = getCelebrities()

for (let singleCelebrity of allCelebrities) {
    console.log(singleCelebrity)
}

// Import the CelebrityList function from the correct module
import {CelebrityList} from './celebList.js'

/*
    CSS SELECTOR
 */
let parentHTMLElement = document.querySelector(".celeb-container")


parentHTMLElement.innerHTML = CelebrityList()