import { getIntro } from "./main.js";

export const introPrompt = () => {
    const blurb = getIntro()

    let htmlString = ''

    for (const singleArgentina of blurb) {
        htmlString += ` <div class="card-row">
        <div class="card-container">
        <div><img class ="card-img" src="${singleArgentina.imgUrl}"></div>
        <div class="card-body">
        <h2 class="card-title"> ${singleArgentina.name}</div>
        <p> ${singleArgentina.fact}</p>
        <a href="./Argentina/argentina.html" class="btn">Read more</a>
        </div>`
    }

    return htmlString
}

const blurb = introPrompt()