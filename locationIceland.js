import {icelandLandmarks} from './iceland.js'

export const icelandLandmarks = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    //Start building a string filled with HTML syntax
    let htmlString = `  
        <article class = "intro">
       </article>
   
    </body>`

    
   //Create HTNL representations of each fish here
    for (const singleFish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishbio">
        <dl>
        <dt><div class = "fish_name"><h4> ${singleFish.name}<h4></div><dt>
        <dd><div><img  class="fish__image image--card" src="${singleFish.image}" /></div><dd>
        <dd><div class = "fish_species">${singleFish.species}</div><dd>
        <dd><div class = "fish_size">${singleFish.size}</div><dd>
        <dd><div class = "fish_harvested">${singleFish.harvested}</div><dd>
        <dd><div class = "fish_food"> ${singleFish.food}</div><dd>

        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}


