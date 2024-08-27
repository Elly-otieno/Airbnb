import zaferes from "./assets/images/zaferes.svg"
import wedding from "./assets/images/wedding.svg"
import bike from "./assets/images/bike.svg"
import cooking from "./assets/images/cooking.png"
import guitar from "./assets/images/guitar.png"

const data = [
    {
        id: 1,
        name: "Life lessons",
        image: zaferes,
        title: "Life lessons with Katie Zaferes",
        location: "online",
        price: 136,
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        openSpots: 0
    },
    {
        id: 2,
        name: "wedding photography",
        image: wedding,
        title: "Learn wedding photography",
        location: "online",
        price: 125,
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        openSpots: 12
    },

    {
        id: 4,
        name: "cooking",
        image: cooking, 
        title: "Italian Cooking Class",
        location: "Italy",
        price: 75,
        stats: {
            rating: 4.9,
            reviewCount: 10
        },
        openSpots: 6
    },
    {
        id: 3,
        name: "biking",
        image: bike,
        title: "Group Mountain biking",
        location: "USA",
        price: 50,
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        openSpots: 9
    },
    {
        id: 5,
        name: "guitar",
        image: guitar, 
        title: "Beginner Guitar Lessons",
        location: "USA",
        price: 40,
        stats: {
            rating: 4.7,
            reviewCount: 5
        },
        openSpots: 10
    }
]

export default data;