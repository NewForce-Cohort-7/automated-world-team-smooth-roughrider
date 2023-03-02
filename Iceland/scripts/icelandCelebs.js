import { icelandCelebrities } from "./iceland.js"

export const celebsList = () => {
    let celebs = icelandCelebrities()

    let htmlString = '<div class="col-12 celeb-section-heading"><h2 id="celeb-link">Iceland Celebs</h2></div><div class="celeb-row">'

    for (const copyOfSingleCelebritiesObject of celebs) {
        htmlString += `<div class="celeb">
        <div class="celeb-header"><img class ="celeb-img" src="${copyOfSingleCelebritiesObject.imgUrl}"></div>
        <div class="celeb-body">
        <h2 class="celeb-title"> ${copyOfSingleCelebritiesObject.name}</div>
        <div class = "celeb-fact"> ${copyOfSingleCelebritiesObject.fact}</p>
        </div> 
        </div>`
    }

    htmlString +=`</div>`
    return htmlString
}

