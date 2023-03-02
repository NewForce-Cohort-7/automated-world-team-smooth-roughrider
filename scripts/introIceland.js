import { icelandIntro } from "./iceland.js";

export const introList = () => {
    const intro = icelandIntro()

    let htmlString = ''

    for (const copyOfSingleIntroObject of intro) {
        htmlString += `
        <div><img class ="hero " src="${copyOfSingleIntroObject.imgUrl}"></div>
        <h2 class="hero-title> ${copyOfSingleIntroObject.introText}</div>`
    }

    return htmlString
}

const intro = icelandIntro()

    return htmlString
