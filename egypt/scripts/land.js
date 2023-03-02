import { egyptLand } from "./objects.js";

export let Landmarks = () => 
{
    let land = egyptLand();

    let htmlString = '<div class="col-12 celeb-section-heading"><h2 id="celeb-link">Egyptian Landmarks</h2></div><div class="celeb-row">';

    for (let singleLand of land) {

        // Why is there a backtick used for this string?
        htmlString += `
        <div class="card">
        <div class="card-row">
          <img src="${singleLand.picture}" class="card-img" />
        </div>
        <div class="card-body">
          <h2 class="card-title">${singleLand.name}</h2> <!-- LANDMARK NAME -->
          <!-- LANDMARK BLURB -->
            <p>
            ${singleLand.fact}
          </p>
        </div>
      </div>
               
                
        
`;
    }
    htmlString += `</article>`;
    return htmlString;
}

