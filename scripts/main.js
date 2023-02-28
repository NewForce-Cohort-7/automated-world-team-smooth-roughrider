const destinations = {
    landmarks: [
        {
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cataratas.jpg/280px-Cataratas.jpg",
            name: "Iguazu Falls",
            fact: "The name 'Iguazu' comes from the Guarani and Tupi words meaning 'water' and 'big'. The falls are found at the borders of the Argentine province of Misiones and the Brazilian state of Parana.",

        },
        {
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Museo_de_Arqueolog%C3%ADa_de_Alta_monta%C3%B1a_en_la_provincia_de_Salta.jpg",
            name: "Museo de Arqueologia de Alta Montana (Museum of High Altitude Archaeology)",
            fact: "Located in Salta, Argentina, the museum was inaugurated in 2004 to preserve, research, and exhibit a collection of objects (including mummies!) from the Inca period of South America's history."
        },
        {
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/SantaCruz-CuevaManos-P2210651b.jpg/260px-SantaCruz-CuevaManos-P2210651b.jpg",
            name: "Cueva de las Manos (Cave of the Hands)",
            fact: "The cave is located in the province of Santa Cruz, Argentina. The cave is listed as a UNESCO World Heritage Site."
        },
    ]
}


const people = {
    celebrities: [
        {
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Manu_Ginobili_Spurs-Magic011_%28cropped%29.jpg/220px-Manu_Ginobili_Spurs-Magic011_%28cropped%29.jpg",
            name: "Manu Ginobili",

        },
        {
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/220px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
            name: "Lionel Messi",
        },
        {
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Evita_%28cropped%29.JPG/220px-Evita_%28cropped%29.JPG",
            name: "Eva 'Evita' Peron",
            
        },
    ]
}

const places = {
    cities: [
        {
           imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Catedral_de_C%C3%B3rdoba_a_la_tarde.JPG/800px-Catedral_de_C%C3%B3rdoba_a_la_tarde.JPG",
           name: "Cordoba, Argentina",
           fact: "Located in the foothills of the Sierras Chicas on the Suquia River, Cordoba is the second most populous city in Argentina. Established by the Spanish in 1573, the city has found a way to meld modern architecture with the buildings from it's humble beginning as a Spanish colonial settlement." 
        },
        {
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Monumento_a_la_Bandera%2C_Rosario.jpg/800px-Monumento_a_la_Bandera%2C_Rosario.jpg",
            name: "Rosario, Argentina",
            fact: "Rosario is the third most populous city in Argentina. Rosario is the most populous city in Argentina that isn't a provincal or national capital. Lionel Messi and Che Guevara are two notable people from the city of Rosario."
        },
        {
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Puerto_Madero%2C_Buenos_Aires_%2840689219792%29_%28cropped%29.jpg/1280px-Puerto_Madero%2C_Buenos_Aires_%2840689219792%29_%28cropped%29.jpg",
            name: "Buenos Aires, Argentina",
            fact: "Buenos Aires is the national capital of Argentina. Boasting a population of 15,490,000 (as of 2023). The city was permanently settled in 1580 after the attempt in 1542 was abandoned due to constant attacks from the indigenous people in the area. The culture of Buenos Aires is influenced by European culture, sometimes referred to as the 'Paris of South America'. The city is a great place for those interested in the arts."
        },
    ]

}

const intro = {
    argentina: [
        {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1024px-Flag_of_Argentina.svg.png",
        fact: "Officially known as the Argentine Republic, Argentina is the second-largest country in South America and the eighth-largest country in the world.",
        },
    ]
}

export const getLandmarks = () => {
    return destinations.landmarks.map(copyOfSingleLandmarkObject => ({...copyOfSingleLandmarkObject}))
}

export const getCelebs = () => {
    return people.celebrities.map(copyOfSingleCelebrityObject => ({...copyOfSingleCelebrityObject}))
}

export const getCities = () => {
    return places.cities.map(copyOfSingleCityObject => ({...copyOfSingleCityObject}))
}

export const getIntro = () => {
    return intro.argentina.map(copyOfSingleArgentinaObject => ({...copyOfSingleArgentinaObject}))
}