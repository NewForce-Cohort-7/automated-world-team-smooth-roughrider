import { getCelebs } from "./main.js";

export const celebList = () => {
    const celebs = getCelebs()

    let htmlString = '<div class="col-12 celeb-section-heading"><h2 id="celeb-link">Argentinian Celebrities</h2></div><div class="celeb-row">'

    for (const singleCeleb of celebs) {
        htmlString += ` <div class="celeb">
        <div><img class ="celeb-img" src="${singleCeleb.imgUrl}"></div>
        <div class="celeb-body">
        <h2 class="celeb-title"> ${singleCeleb.name}</div>
        <p> ${singleCeleb.fact}</p>
        </div>`
    }
    htmlString += `</div>`
    return htmlString
}

