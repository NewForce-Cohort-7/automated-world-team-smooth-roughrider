// indonesia landmarks
let indonesia = {
    celebrities:
    [
        {
            name: "Agnes Monica",
            image: 'https://i.ibb.co/5LKqHD8/fish3.png',
            altText: 'photograph of Agnes Monica',
            description: 'International Pop Artist'
        },
        {
            name: "Taufik Hidayat",
            image: 'https://i.ibb.co/cLXV1x9/fish.jpg',
            altText: 'photograph of taufik hidayat',
            description: 'Badminton Player'
        },
        {
            name: "Pramoedya Ananta Toer",
            image: 'https://i.ibb.co/cLXV1x9/fish.jpg',
            altText: 'photograph of pramoedya ananta toer',
            description: 'Novelist'
        }
    ]
}

// export
export let getCelebrities = () => {
    return indonesia.celebrities.map(copyOfSingleCelebrityObject => ({...copyOfSingleCelebrityObject}))
}

