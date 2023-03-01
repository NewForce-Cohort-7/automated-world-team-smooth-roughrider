// Import the function that returns a copy of the indonesia
import {getCelebrities} from './celebDB.js'

export let CelebrityList = () => {
    // Invoke the function that you imported from the database module
    let celebrities = getCelebrities()

    // Start building a string filled with HTML syntax
    let htmlString = '<div class="col-12 celeb-section-heading"><h2 id="celeb-link">Indonesian Celebrities</h2></div><div class="celeb-row">'

    // Create HTML representations of each fish here
    for (let singleCelebrity of celebrities) {

        // Why is there a backtick used for this string?
        htmlString += `
        <div class="celeb">
        <div class="celeb-header">
          <img src="https://i.ibb.co/wrN8wJK/fish5.jpg" class="celeb-img" />
        </div>
        <div class="celeb-body">
          <h2 class="celeb-title">${singleCelebrity.name}</h2> <!-- CELEBRITY NAME -->
          <!-- CELEBRITY BLURB -->
            <p>
            ${singleCelebrity.description}
          </p>
        </div>
      </div>
`
    }
    htmlString += `</div>`

    return htmlString
}

