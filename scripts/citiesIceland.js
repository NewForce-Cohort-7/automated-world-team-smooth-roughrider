import { icelandCities } from "/iceland.js";

export const cityList = () => {
    const cities = icelandCities()

    let htmlString = ''

    for (const copyOfSingleCitiesObject of cities) {
        htmlString += `<div class="card-container">
        <div><img class ="card-img" src="${copyOfSingleCitiesObject.imgUrl}"></div>
        <div class="card-body">
        <h2 class="card-title"> ${copyOfSingleCitiesObject.name}</div>
        <p> ${copyOfSingleCitiesObject.fact}</p>
        </div>`
    }

    return htmlString
}

const cities = cityList()

    return htmlString

