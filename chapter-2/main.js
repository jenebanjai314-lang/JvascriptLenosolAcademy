// Nested If Statement
// Student Grade Distinction Checker
let grade = 92

if (grade >= 50){
    console.log("congratulations, you passed"); 
    
    if(grade >= 90){
        console.log("You passed with distinction.")
    } else {
        console.log("You did not passed with distinction");
    }
} else {
    console.log("Sorry, you failed. Please retake the exam.");
}

   
// EXERCISE 
/* 
  Mamy Fatu sells cakes and said whoever buys cakes worth Le10,000 is given 10% discout.
  1.Write a program that takes total price of cakes input from the user
  2.Check if the total price of cakes bought exceeds 10,000
  3.If the price exceeds, give them 10% discount in words. Eg... "You won 10% discount. Thank you for doing business with us."
  4.if not met, just print "Thank you for doing business with us."
  5.Mamy fatu is so generous to all her customers who buys products worth Le20,000 and above and offer delivery service to them if total price exceeds. If not exceed 20,000, let them know they are not eligible for delivery.*/


console.log("******************************");

let cakes = 10000
console.log(`You bought cakes worth Le${cakes}`);

if (cakes >= 10000){
    console.log("You won 10% discount. Thank you for doing business with us.")

    if(cakes >= 20000){
        console.log("You are entitled to delivery of your cake");   
    } else{
        console.log("You are not eligible for delivery of your cake");   
    }
} else{
    console.log("Thank you for doing business with us")
}

// EXERCISE 2
//Create a JS app that takes someone's email and password to log them into the app.
// i. If the email of the user is not admin@lenosol.com, just welcome the user to their account
// ii.If the email is admin@lenosol.com, state their admin status and if not and admin, display they are not an admin.
// iii. If the password is not 123456 for anyone who tries to log in, print "Wrong Credentials"
// Using Nested if statement, design the app that does all the instructions above.

let userEmail = prompt("jenebanjai137@gmail.com");
let userPassword = prompt("6110:");

if (userEmail !== "jenebanjai137@gmail.com" && password === "6110") {
    console.log("Welcome User: ${userEmail}");

    if(userEmail === "jenebanjai137@gmail.com"){
        console.log("Welcome admin: ${userEmail}");
    } else{
        console.log("You are not an admin")
    }
} else {
    console.log("Wrong Credentials");
}











