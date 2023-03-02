import { egyptLocations } from "./objects.js";

export let LocationList = () => {
    let locations = egyptLocations()

    let htmlString = '<div class="col-12 celeb-section-heading"><h2 id="celeb-link">Egyptian Landmarks</h2></div><div class="celeb-row">'
    
  

    for (let singleLocations of locations) {

        htmlString += 
        `<article class="intro-content col-12">
        <h2 class="intro-title">Location</h2>
        <p class="intro-text">${singleLocations.city}.</p>
      </article>
      
`
    }
    htmlString += `</div>`

    return htmlString
}