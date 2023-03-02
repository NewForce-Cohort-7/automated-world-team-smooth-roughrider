import { icelandIntro } from "./iceland.js";

export const introList = () => {
    let intro = icelandIntro()

    let htmlString = '<section class = "intro-cities"></section>'


    for (const copyOfSingleIntroObject of intro) {
        htmlString += `
        <div><img class ="hero " src="${copyOfSingleIntroObject.imgUrl}"></div>
        <h2 class="hero-title> ${copyOfSingleIntroObject.introText}</div>`
    }

    return htmlString
}


