// Import the function that returns a copy of the indonesia
import {getLandmarks} from './landmarkDB.js'

export let LandmarkList = () => {
    // Invoke the function that you imported from the database module
    let landmarks = getLandmarks()

    // Start building a string filled with HTML syntax
    let htmlString = '<div class="col-12 card-section-heading"><h2>Must-See Landmarks</h2></div><div class="card-row">'

    // Create HTML representations of each fish here
    for (let singleLandmark of landmarks) {

        // Why is there a backtick used for this string?
        htmlString += `
        <div class="card">
        <div class="card-header">
          <img src="https://i.ibb.co/wrN8wJK/fish5.jpg" class="card-img" />
        </div>
        <div class="card-body">
          <h2 class="card-title">${singleLandmark.name}</h2> <!-- LANDMARK #3 NAME -->
          <!-- LANDMARK BLURB -->
            <p>
            ${singleLandmark.description}
          </p>
        </div>
      </div>
`
    }
    htmlString += `</div>`

    return htmlString
}

