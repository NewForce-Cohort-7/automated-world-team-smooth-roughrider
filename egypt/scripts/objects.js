const egypt ={
    locations: [
        {
        city:"Alexandria"},
        {
            city: "Cairo"},

        {
            city: "Thebes"},
            {
                city:"Giza"
            },
         {
            city: "Memphis"
         }
         
    ],



    land: [
        {
        picture:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQoD5qV1c5Z5tcGCURiwQHLLsDQLy1aEiEUlvW3MgtsFU8S6k3EQ273_1yM0gL5TWYoIs5ddJzYgggqTyECwyapig",
        name: "Great Sphinx of Giza",
        fact: "The Great Sphinx of Giza is a limestone statue of a reclining sphinx, a mythical creature with the head of a human, and the body of a lion"
        },

        {picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4vgiER8fqMXyU8kn__OQx7M_7taYduvecR5p-3vT42DVJBtZrUARBXz8UDWxERy2vxRzvfOr6157puG5cx11FBw",
        name: "Montaza Palace",
    fact: "Montaza Plaza is a palace, museum and extensive gardens in the Montaza district of Alexandria, Egypt."},

    {picture:"https://www.bibalex.org/images/bibalex_share.jpg",
        name:"Bibliotheca Alexandrina",
    fact:"The Bibliotheca Alexandrina is a major library and cultural center on the shore of the Mediterranean Sea in Alexandria, Egypt"},

    {picture:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUhAjt2tRFYyT8Rtk263L-9bIgHJUfoShVqsz7uOk5GeT2zgtxQxlAmp8UaMWolRoEmiNH_6OId8VMT7RndoZ_Cg",
        name:"Citadel of Qaitbay",
    fact:"The Citadel of Qaitbay is a 15th-century defensive fortress located on the Mediterranean sea coast, in Alexandria, Egypt"},

     {picture:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ5oPS4k1FskcVgkE_3rknaYFbMzZo8TlVhLYtWg5yX5O7ovIukrNPIEuatCrnxW1zrkRQ0dntvdadRc7k7jOfovQ",
        name:"Luxor Temple",
    fact:"Unlike the other temples in Thebes, Luxor temple is not dedicated to a cult god or a deified version of the pharaoh in death. Instead, Luxor temple is dedicated to the rejuvenation of kingship"},

],




celebrities: [
    {
     picture:"https://upload.wikimedia.org/wikipedia/commons/e/e6/Dina_Bellydancer.png",
        name:"Dina Tala'at Sayed Muhammad",
    fact:"Dina Tala'at Sayed Muhammad is an Egyptian belly dancer and actress. She was named as the Last Egyptian Dancer by the American magazine Newsweek"},

    {picture:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSc4bnfG3zNmNB6Dk4C3vge8FxKkdFH64E96jiW8FKdS_04gDdF",
    name:"Mohamed Salah Hamed Mahrous Ghaly",
fact:"Mohamed Salah Hamed Mahrous Ghaly, also known as Mo Salah, is an Egyptian professional footballer who plays as a forward for Premier League club Liverpool and captains the Egypt national team"},

{picture:"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT4BJyYP8XRbFVeFRdXPiZRgFPpO08PjXEyyMWIkWb-c8z767ItaX6lEYHofMf3DZRc",
    name:"Ramessses II",
fact:"commonly known as Ramesses the Great, was an Egyptian pharaoh. He was the third ruler of the Nineteenth Dynasty"},

{picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Nofretete_Neues_Museum.jpg/1200px-Nofretete_Neues_Museum.jpg",
    name:"Neferneferuaten Nefertiti",
fact:"Neferneferuaten Nefertiti was a queen of the 18th Dynasty of Ancient Egypt, the great royal wife of Pharaoh Akhenaten"},

    {picture:"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTAEzAIKwPNGgTpFM5dZLkCUUv1gTWv33suBDxMsyjkN1o0vkFSsvueDOJ1nlE-k441",
    name: "Tutankhamun",
fact:"Tutankhamun was the antepenultimate pharaoh of the Eighteenth Dynasty of ancient Egypt. He ascended to the throne around the age of nine and reigned until his death around the age of nineteen."},
]}





export const egyptLocations = () => {
  return egypt.locations.map(copyOfSingleLocationsObject => ({ ...copyOfSingleLocationsObject })) }

     export const egyptLand = () => {
            return egypt.land.map(copyOfSingleLandObject => ({ ...copyOfSingleLandObject })) }

            export const egyptCelebrities = () => {
                return egypt.celebrities.map(copyOfSingleCelebritiesObject => ({ ...copyOfSingleCelebritiesObject })) }

        