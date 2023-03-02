// Import the function that returns a copy of Indonesian cities
import {getCities} from './cityDB.js'

export let CityList = () => {
    // Invoke the function that you imported from the database module
    let cities = getCities()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="intro-content col-12"><img src="https://i.ibb.co/SVXyYtg/cute-uwu-anime-0azb5cvkmph1qkmw.gif" class="silly"/><h2 class="intro-title">Tropic Like It\'s Hot</h2><p><p>Are you an exhausted 30-something year old millennial finding yourself in an understandable existential funk?</p><p>Do you find your days drifting by in a listless stream of increasingly confusing responsibilities that are at odds with your central identity as a human being? Do you lack pleasure in the 24/7 capitalistic grind of modern life? Do you wish to extricate yourself from the inescapable iron grip of the proletariat? Do you ever ask yourself, “does any of this even matter?” The answer is NO, plebian, but we at Travel Agency are here to help! (And take a pretty commission from the overall cost of your expensive vacation. hahah dweeb).</p> <p>Let us recommend to you a beautiful island vacation in Bali, Indonesia that will no doubt reinvigorate your sad, small existence for the period of time that you’re there! No matter that your return to American soil will signal a resurgence of depression and FOMO - it’s time to live in the moment, with your toes buried in the sand and your face in the latest and greatest beach read (probably about a white woman finding herself in an exotic place, like Bali - just think, THIS COULD BE YOU)!</p><p> Below, you will find a list of beautiful, exciting, relaxing, and exotic cities within the Bali region of Indonesia for you to vacay (or perhaps bae-cay with that special someone?) and forget about those emails that you can’t resist reading at 10 pm. Take some time to self-soothe, and don\'t forget to put away your leash--err, cell phone (that is, until it\'s time to post a vaguely unappetizing photo of your next meal to Instagram).<p> We also have a couple of sections below about Indonesian celebrities (aka people much richer and far more accomplished than yourself, lmao) and some nifty tourist traps to infringe upon.</p> <p>Seek adventure, because after all, <em>when life stops, you’re dead!</em></p><br><h2 class="city-title">Cities</h2>'

    // Create HTML representations of each city here
    for (let singleCity of cities) {

        // Why is there a backtick used for this string?
        htmlString += `
        <div class="city-info">
        <h3 class="intro-text">${singleCity.name}</h3>
        <p> ${singleCity.description}</p>
        </div>
`
    }
    htmlString += `</article>`

    return htmlString
}

