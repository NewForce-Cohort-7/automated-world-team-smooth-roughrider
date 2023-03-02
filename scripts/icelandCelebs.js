import { icelandCelebrities } from "./iceland.js"

export const celebsList = () => {
    const celebs = icelandCelebrities()

    let htmlString = ''

    for (const copyOfSingleLandmarksObject of places) {
        htmlString += `<div class="card-container">
        <div><img class ="card-img" src="${copyOfSingleLandmarksObject.imgUrl}"></div>
        <div class="card-body">
        <h2 class="card-title"> ${copyOfSingleLandmarksObject.name}</div>
        <p> ${copyOfSingleLandmarksObject.fact}</p>
        </div>`
    }

    return htmlString
}

const celebs = celebsList()

    return htmlString
