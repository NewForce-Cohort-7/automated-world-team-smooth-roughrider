import {icelandLandmarks} from "./iceland.js";

export const landmarksList = () => {
    let landmarks = icelandLandmarks()

    let htmlString = '<section class="card-row "><h2 id="card-link">Places to Visit</h2></div><div class="card-row">'

    for (const copyOfSingleLandmarksObject of landmarks) {
        htmlString += `<div class = "card">
        <div class = "city-header">        
        <div><img class ="city-img" src="${copyOfSingleLandmarksObject.imgUrl}"></div>
        <div class="city-body">
        <h2 class="city-title"> ${copyOfSingleLandmarksObject.name} </div>
        <p> <class="city-fact">${copyOfSingleLandmarksObject.fact}</div></p>
        </div>`
    }

    return htmlString
}
