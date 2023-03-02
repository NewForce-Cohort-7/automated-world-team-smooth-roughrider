import { icelandLandmarks } from "./iceland.js";

export const landmarksList = () => {
    const landmarks = icelandLandmarks()

    let htmlString = ''

    for (const copyOfSingleLandmarksObject of landmarks) {
        htmlString += `<div class="card-container">
        <div><img class ="card-img" src="${copyOfSingleLandmarksObject.imgUrl}"></div>
        <div class="card-body">
        <h2 class="card-title"> ${copyOfSingleLandmarksObject.name}</div>
        <p> ${copyOfSingleLandmarksObject.fact}</p>
        </div>`
    }

    return htmlString
}

const landmarks = icelandLandmarks()

    return htmlString

