import { egyptCelebrities } from "./objects.js";

export let CelebrityList = () => {
    let celebrities = egyptCelebrities()

    let htmlString = '<div class="col-12 celeb-section-heading"><h2 id="celeb-link">Egyptian Celebrities</h2></div><div class="celeb-row">'

    for (let singleCelebrity of celebrities) {

        htmlString += `
        <div class="celeb">
        <div class="celeb-header">
          <img src="${singleCelebrity.picture}" class="celeb-img" />
        </div>
        <div class="celeb-body">
          <h2 class="celeb-title">${singleCelebrity.name}</h2> <!-- CELEBRITY NAME -->
          <!-- CELEBRITY BLURB -->
            <p>
            ${singleCelebrity.fact}
          </p>
        </div>
      </div>
`
    }
    htmlString += `</div>`

    return htmlString
    }
