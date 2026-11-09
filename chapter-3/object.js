// JS - OBJECTS
const student = {
    firstName: "Mohamed",
    lastName: "Kargbo",
    age: 29,
    walk: true,
    girlfriend: false,
    university: "Limkokwing",
    program: "BIT",
    occupation: "Web Designer",
    photo: "https://www.pixabay.com/mohamed-pic-002",
    website: "https://mohamed-kargbo.netlify.app/",
}

// Printing the object
console.log(student)

// Accessing a property of an object
console.log(student.photo)

// UPDATING AN ATTRIBUTE IN AN OBJECT
student.occupation = "website Designer"
console.log(student)

//Adding a new property to the object
student.gender = "Male"
console.log(student)

//Exercise 1
// Create an object for a citizen (at least 5 crucial infos) and print them to the console in an ID Card format using the JS Template Literal

const citizen = {
    fullName : "Jeneba Njai",
    nationality : "Sierra Leone",
    gender : "Female",
    age : 29,
    placeofBirth : "6ft",
}

console.log(`**********SIERRA LEONE NATIONAL ID CARD **********`)
console.log(`Full Name: ${citizen.fullName}`);
console.log(`Gender: ${citizen.gender}`);
console.log(`Nationality: ${citizen.nationality}`);
console.log(`Place of Birth: ${citizen.placeofBirth}`);
console.log(`Age: ${citizen.age}`);
console.log(`****************** SL ID CARD ***************`);

const house = {
    location: "Lumley",
    numberOfRooms:4,
    parlour: 2,
    bathroom: 5,
    owner: "Mohamed Kargbo",
    pricePerNight: 1000,
    facilities: ["Internet", "One Mobile - Wifi", "Kitchen", "TV", "Car Park", "Dryer", "Pool", "Beach Access", "No Smoking", "No Pets"],  appartment: {
        name: "Block D appartment",
        numberOfRooms: 2,
        gamingTV: 1
    }
}
console.log(house)
console.log(house.appartment)
console.log(house.facilities)

