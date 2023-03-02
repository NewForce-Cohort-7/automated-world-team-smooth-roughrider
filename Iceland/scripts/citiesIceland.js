import { icelandCities } from "./iceland.js";

export const cityList = () => {
    let cities = icelandCities()

    let htmlString =  '<section class="city-container">'

    for (const copyOfSingleCitiesObject of cities) {
        htmlString += `<div class="city">
        <div class="celeb-header">
        <div><img class ="card-img" src="${copyOfSingleCitiesObject.imgUrl}"></div>
        <div class="card-body">
        <h2 class="card-title"> ${copyOfSingleCitiesObject.name}</div>
        <p> ${copyOfSingleCitiesObject.fact}</p></div>
        </div>`
    }

    return htmlString
}

