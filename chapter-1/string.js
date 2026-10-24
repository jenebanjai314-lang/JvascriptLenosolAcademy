let university = "Limkokwing"
console.log("Limkokwing");
let fullName = "Jeneba Njai"
let Role = "Student"
let id = "6110"
let gender = "Female"
let faculty = "BIT"

console.log(fullName);
console.log(Role);
console.log(id);
console.log(gender);
console.log(faculty);

// 1. String Concatenation
console.log("**** PERSON INFORMATION ****")
console.log("University:" + university);
console.log("Person Name:" + fullName);
console.log("Role:" + Role);
console.log("Faculty:" + faculty);

let sentence = ("my name is " + fullName + ". I am a " + Role + " at " + university + ". My ID is " + id + " and I am a " + gender + ". I study in the faculty of " + faculty + ".");

console.log(sentence);


// String Length
let personName = "Jeneba Njai"
console.log(personName.length)

// Getting a Character from a string by its index
console.log(personName[4])
console.log(personName[7])
console.log(personName[10])
console.log(personName[11])
console.log(personName[1])
console.log(personName[1])

// EXERCISE
// Create an abbreviation of five variable names that has two or three words in them and let the abbreviated variables of those variables have just the starting characters of the values of those variables to be abbreviated
let str1 = "Jeneba Gibril Njai"
let str2 = "Alhaji Njai"
let str3 = "Amadu Kamara"
let str4 = "Khadija Kamara"
let str5 = "Aminata Jane Kamara"

let abvr1 = str1[0] + str1[7] + str1[14]
let abvr2 = str2[0] + str2[6]
let abvr3 = str3[0] + str3[6]
let abvr4 = str4[0] + str4[8]
let abvr5 = str5[0] + str5[8] + str5[13]

// String Methods
let strVal = "Jeneba Njai"
console.log(strVal)

// Convert to uppercase
console.log(strVal.toUpperCase())
console.log(strVal.toLowerCase())

// String formatting
console.log("\t Jeneba Njai")
console.log("\n Jeneba webAvengers")

// Template Literals / String Literals
let num1 = 20;
let num2 = 13;
let num3 = 24;
let average = (num1 + num2 + num3) / 3;
console.log(average);
console.log(`The average of ${num1} + ${num2} + ${num3} = ${average}`);

// Checking if a value exists in a string
let email = "AmKaM@lenosol.com"
console.log(email.includes("amkam")); // false
// Method Chaining
console.log(email.toLowerCase().includes("amkam")); // true
