// indonesia cities
let indonesia = {
    cities: 
    [
        {
            name: "Ubud",
            description: "Ubud is located in the Uplands of Bali, Indonesia, and is a popular tourist destination. The surrounding Ubud District's rainforest and terrace ride paddies, dotted with Hindu temples and shrines, are among Bali's most famous landscapes."
        },
        {
            name: "Kuta",
            description: "Kuta is a tourist area located in southern Bali, Indonesia, and is the capital of the Kuta District. A former fishing village, it was one of the first towns on Bali to see substantial tourist development, and as a beach resort remains one of Indonesia's major tourist destinations."
        },
        {
            name: "Canggu",
            description: "Canggu is a coastal village and 10 km beach on the southern coast of Bali, Indonesia. It lies approximately 10 kilometers north of Kuta, and presents a much more relaxing atmosphere of dining, cultural, and beach activities."
        }
    ]
}

// export
export let getCities = () => {
    return indonesia.cities.map(copyOfSingleCityObject => ({...copyOfSingleCityObject}))
}

