// indonesia landmarks
let indonesia = {
    landmark:
    [
        {   name: "Campuhan Ridge (Ubud, Bali)",
            image: 'https://i.ibb.co/sb6wgpC/fish3.png',
            altText: 'picture of campuhan ridge in ubud, bali',
            description: "The Kajeng Rice Fields Walk is a scenic path that goes through the actively farmed rice paddies within Ubud. While not initially made to be a tourist attraction, hotels, cafes, and little stores started opening up along the Kajeng Rice Fields walk, catering to the tourists who strolled the rice paddies for the beautiful views. It's a very peaceful escape from the hustle and bustle of Ubud."
        },
        {
            name: "Saraswati Temple (Ubud, Bali)",
            image: 'https://i.ibb.co/cLXV1x9/fish.jpg',
            altText: 'picture of the saraswati temple in ubud, bali',
            description: "Saraswati temple Kingdom of Ubud is dedicated to honor the Hindu Goddess Saraswati, the goddess of learning, literature and art. This temple is very beautiful and artistic, with a water garden and lotus pond at the center of the attraction, as well as many fine carvings. Many tourists come to see its charm, but also for purposes of worship."
        },
        {
            name: "Ubud Kajeng Rice Fields (Ubud, Bali)",
            image: 'https://i.ibb.co/cLXV1x9/fish.jpg',
            altText: 'picture of the ubud kajeng rice fields in ubud, bali',
            description: "The Campuhan Ridge Walk is arguably the best known Ubud trek and with good reason. The sparse crowds and the aesthetically rich vistas remind one of why people from around the world come to Bali. The trail starts at the historical origin of Ubud, the confluence (or Campuhan) of the Wos Rivers."
        }
    ]
}

// export
export let getLandmarks = () => {
    return indonesia.landmark.map(copyOfSingleLandmarkObject => ({...copyOfSingleLandmarkObject}))
}

