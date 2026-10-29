// OPERATORS

// 1. Mathematical Operators
// Addition operators
let num1 = 20
let num2 = 10
let sum = num1 + num2  // Additional Operator Usage
let difference = num1 * num2 //Subtration Operator Usage
let product = num1 * num2 //Multiplication Operator Usage
let quotient = num1 / num2; // Division Operator Usage
let remainder = num1 % num2; // Modulus Operator Usage

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);

// Comparison Operators

console.log(num1 > num2) // Greater than operator usage
console.log(num1 < num2) // Less than operator usage
console.log(num1 >= num2) // Greater than or Equal operator usage
console.log(num1 <= num2) // Less than or Equal operator usage
console.log(num1 == num2) // Equal to Operator or Loose Equal Usage
console.log(num1 === num2) //Equal to Operator or Strict Equal usage

console.log("---------------------------")

let number = "9"
console.log(number == 9) // True - Loose equality check
console.log(number === 9) // False - Strict equality check

// Logical Operator
let email = "amkam@lenosol.com";
let password = "12345678";

// The Logical AND (&) Operator - Only returns true when both conditions are true
console.log(email === "amadu@lenosol.com" && password === "123456789"); // False
console.log(email === "amkam@lenosol.com" && password === 123456789); //False
console.log(email === "amkam@lenosol.com" && password === "123456789"); //True

console.log("----------------------------------");

// The Logical OR (||) - Only returns true when at least one condition is true amd false when all conditions are false false
console.log(email === "amadu@lenosol.com" || password === "123456789"); // True
console.log(email === "amkam@lenosol.com" || password === 123456789); // True
console.log(email === "amadu@lenosol.com" || password === "123456789"); // False

// The Logical NOT (!) - This operator negate a variable's value.
let abuAge = 34
let marieAge = 23
let fodayAge = "34"
console.log(abuAge != marieAge) // True
console.log(abuAge != fodayAge) // False
console.log(abuAge !== fodayAge) // True











