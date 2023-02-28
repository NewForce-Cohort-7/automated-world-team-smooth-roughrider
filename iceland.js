const iceland = {
   intro: [
     {
        introText: "Iceland is a Nordic island country in the North Atlantic Ocean and in the Arctic Ocean. Iceland is the most sparsely populated country in Europe.",
        imgUrl: "https://cdn.kimkim.com/files/a/maps/ece53dc33e400c9f2c29bc5e93fa7cb95fe47cef/big-344fc747cdeff7b2f199c2c9f9934a46.jpg",
   }
   ],
    cities: [
       { 
        imgUrl: "https://www.icelandtravel.is/_next/image/?url=https%3A%2F%2Ficetprodblue.wpengine.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fshutterstock_373933723.jpg&w=1920&q=75" ,
        name: "Reykjavik",
        fact: "Reykjavik is the capitol of Iceland and its largest city with 130,000 residents.", 
       },
       {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Akureyri_-_Skapti_Hallgr%C3%ADmsson.jpg/250px-Akureyri_-_Skapti_Hallgr%C3%ADmsson.jpg",    
        name: "Akureyri",
        fact: "Akureyri is a city at the base of Eyjafjörður Fjord in northern Iceland and serves as an importnat important port and fishing centre since it largely stays ice free year round.",

    }, 
    {
        imgUrl: "https://www.whereandwhen.net/site/images/illustration/oualler/islande-hofn_198.jpg",
        name:"Höfn",
        fact: "Höfn is located on a peninsula in the southeast of Iceland and is a gateway community to the Vatnajökull National Park.",
    }
    ],
    landmarks: [
    {
        imgUrl: "https://www.museumguide.is/the-national-museum-of-iceland/",
        name: "National Museum of Iceland", 
        fact:"One must see destination in Reykiavik is the National Museum of Iceland where you can Check out artifacts gathered over the course 1,200 years of Iceland's cultural history.",
    },
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dc/%D0%91%D0%BE%D1%82%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%B0%D0%B4_%D0%90%D0%BA%D1%8E%D1%80%D0%B5%D0%B9%D1%80%D0%B8.jpg",
        name: "Akureyri Botanical Gardens",
        fact: "The gardens are home to over 7,000 species of plants; around 400 are native, but the vast majority are non-native to Iceland.",
    },
    {
        imgURL: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/44/cf/c3/caption.jpg?w=1200&h=-1&s=1",
        name: "Vatnajökull National Park",
        fact: "Located to the West of Hofn, Vatnajökull National Park is a protected wilderness centered around Vatnajökull glacier. Defined by massive glaciers, ice caves, snowy mountain peaks, active geothermal areas and rivers, the region includes Jökulsárlón, a glacial lagoon with icebergs, and the Svartifoss and Dettifosis waterfalls.",
    }
    ],

    celebrities: [
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Bjork_Orkestral_Paris_%28cropped%29.png/800px-Bjork_Orkestral_Paris_%28cropped%29.png",
        name: "Björk",
        fact: "Born in Reykjavik, Björk is a singer, songwriter, composer, record producer, and actress. She has developed an eclectic musical style over her four-decade career that has drawn on electronic, pop, experimental, trip hop, classical, and avant-garde music.",
    },

    {
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/7/73/Eric_the_Red.png",
        name: "Erik the Red",
        fact: "Erik Thorvaldsson(c.950- c.1003), known as Erik the Red, was a Norse explorer, described in medieval and Icelandic saga sources as having founded the first European settlement in Greenland.",
    }, 
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bj%C3%B6rnsson_Arnold_Classic_2017.jpg/800px-Bj%C3%B6rnsson_Arnold_Classic_2017.jpg",
        name: "Hafþór Júlíus Björnsson",
        fact: "Hafþór is an Icelandic professional strongman who is widely regarded as one of the greatest strength athletes of all time. Hafþór also appeared in Game of Thrones playing Ser Gregor Clegane, aka The Mountain for five seasons.",
    }
    ]
}

export const icelandIntro = () => {
    return iceland.intro.map(copyOfSingleIntroObject=> ({...copyOfSingleIntroObject}))
}

export const icelandCities = () => {
    return iceland.cities.map(copyOfSingleCitiesObject=> ({...copyOfSingleCitiesObject}))
}

export const icelandLandmarks = () => {
    return iceland.landmarks.map(copyOfSingleLandmarksObject => ({...copyOfSingleLandmarksObject}))
}
export const icelandCelebrities = () => {
    return iceland.celebrities.map(copyOfSingleCelebritiesObject => ({...copyOfSingleCelebritiesObject}))
}
