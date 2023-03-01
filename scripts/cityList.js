import { getCities } from "./main.js";

export const siteList = () => {
    const places = getLandmarks()

    let htmlString = ''

    for (const singleLandmark of places) {
        htmlString += ` <div class="card-row">
        <div class="card-container">
        <div><img class ="card-img" src="${singleLandmark.imgUrl}"></div>
        <div class="card-body">
        <h2 class="card-title"> ${singleLandmark.name}</div>
        <p> ${singleLandmark.fact}</p>
        </div>`
    }

    return htmlString
}

const places = siteList()