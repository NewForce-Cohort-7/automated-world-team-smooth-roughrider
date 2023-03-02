// import code 
import {getCities} from './cityDB.js'

let allCities = getCities()

for (let singleCity of allCities) {
    console.log(singleCity)
}

// Import the CityList function from the correct module
import {CityList} from './cityList.js'

/*
   CSS SELECTOR 
 */
let parentHTMLElement = document.querySelector(".grid")


parentHTMLElement.innerHTML = CityList()