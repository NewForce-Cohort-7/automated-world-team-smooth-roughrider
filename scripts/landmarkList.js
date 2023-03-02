import { getLandmarks } from "./main.js";

export const siteList = () => {
    const places = getLandmarks()

    let htmlString = '<div class="col-12 card-section-heading"><h2>Must-See Landmarks</h2></div><div class="card-row">'

    for (const singleLandmark of places) {
        htmlString += `<div class="card">
        <div><img class ="card-img" src="${singleLandmark.imgUrl}"></div>
        <div class="card-body">
        <h2 class="card-title"> ${singleLandmark.name}</div>
        <p> ${singleLandmark.fact}</p>
        </div>`
    }
htmlString += `</div>`
    return htmlString
}