const iceland = {
   intro: [
     {
        introText: "Iceland is a Nordic island country in the North Atlantic Ocean and in the Arctic Ocean. Iceland is the most sparsely populated country in Europe.",
        imgUrl: "https://cdn.kimkim.com/files/a/maps/ece53dc33e400c9f2c29bc5e93fa7cb95fe47cef/big-344fc747cdeff7b2f199c2c9f9934a46.jpg",
   }
   ],
    cities: [
       { 
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Reykjav%C3%ADk_s%C3%A9%C3%B0_%C3%BAr_Hallgr%C3%ADmskirkju_6.JPG/1280px-Reykjav%C3%ADk_s%C3%A9%C3%B0_%C3%BAr_Hallgr%C3%ADmskirkju_6.JPG",
        name: "Reykjavik",
        fact: "Reykjavik is the capitol of Iceland and its largest city with 130,000 residents.", 
       },
       {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Akureyri_-_Skapti_Hallgr%C3%ADmsson.jpg/1920px-Akureyri_-_Skapti_Hallgr%C3%ADmsson.jpg",    
        name: "Akureyri",
        fact: "Akureyri is a city at the base of Eyjafjörður Fjord in northern Iceland and serves as an importnat important port and fishing centre since it largely stays ice free year round.",

    }, 
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Iceland_H%C3%B6fn.jpg/1280px-Iceland_H%C3%B6fn.jpg",
        name:"Höfn",
        fact: "Höfn is located on a peninsula in the southeast of Iceland and is a gateway community to the Vatnajökull National Park.",
    }
    ],
    landmarks: [
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Building_of_the_National_Museum_in_Reykjav%C3%ADk.jpg/1280px-Building_of_the_National_Museum_in_Reykjav%C3%ADk.jpg",
        name: "National Museum of Iceland", 
        fact:"One must see destination in Reykiavik is the National Museum of Iceland where you can Check out artifacts gathered over the course 1,200 years of Iceland's cultural history.",
    },
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dc/%D0%91%D0%BE%D1%82%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%B0%D0%B4_%D0%90%D0%BA%D1%8E%D1%80%D0%B5%D0%B9%D1%80%D0%B8.jpg",
        name: "Akureyri Botanical Gardens",
        fact: "The gardens are home to over 7,000 species of plants; around 400 are native, but the vast majority are non-native to Iceland.",
    },
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Hvannadalshnjukur-Vatnajokull_National_Park.JPG",
        name: "Vatnajökull National Park",
        fact: "Located to the West of Hofn, Vatnajökull National Park is a protected wilderness centered around Vatnajökull glacier. Defined by massive glaciers, ice caves, snowy mountain peaks, active geothermal areas and rivers, the region includes Jökulsárlón, a glacial lagoon with icebergs, and the Svartifoss and Dettifosis waterfalls.",
    }
    ],

    celebrities: [
    {
        imgUrl: "https://www.udiscovermusic.com/wp-content/uploads/2020/02/Bjork-GettyImages-543424784.jpg",
        name: "Björk",
        fact: "Born in Reykjavik, Björk is a singer, songwriter, composer, record producer, and actress. She has developed an eclectic musical style over her four-decade career that has drawn on electronic, pop, experimental, trip hop, classical, and avant-garde music.",
    },

    {
        imgUrl: "https://www.thoughtco.com/thmb/PCRCQtvVU88jD4dekc2eGt3isXg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/erik-the-red-detail-58b9732c3df78c353cdc45b9.jpg",
        name: "Erik the Red",
        fact: "Erik Thorvaldsson(c.950- c.1003), known as Erik the Red, was a Norse explorer, described in medieval and Icelandic saga sources as having founded the first European settlement in Greenland.",
    }, 
    {
        imgUrl: "https://image-cdn.essentiallysports.com/wp-content/uploads/hafthor-the-mountain-bjornssons-8-greatest-lifts-headerc-960x540-1-3.jpg?width=900",
        name: "Hafþór Júlíus Björnsson",
        fact: "Hafþór is an Icelandic professional strongman who is widely regarded as one of the greatest strength athletes of all time. Hafþór also appeared in Game of Thrones playing Ser Gregor Clegane, aka The Mountain for five seasons.",
    }
    ]
}

//export const icelandIntro = () => {
    //return iceland.intro.map(copyOfSingleIntroObject=> ({...copyOfSingleIntroObject}))
//}

export const icelandCities = () => {
    return iceland.cities.map(copyOfSingleCitiesObject=> ({...copyOfSingleCitiesObject}))
}

export const  icelandLandmarks = () => {
    return iceland.landmarks.map(copyOfSingleLandmarksObject => ({...copyOfSingleLandmarksObject}))
}
export const icelandCelebrities = () => {
    return iceland.celebrities.map(copyOfSingleCelebritiesObject => ({...copyOfSingleCelebritiesObject}))
}
