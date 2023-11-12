//Mild
//Write a JavaScript program that defines a variable that stores a Number. 
//The program should print out the String "even" if the Number is even, and the String "odd" if the Number is odd. 


var number = 7;
if (number %2 === 0) {
    console.log ("even")
}
else { console.log ("odd")
}


//Medium Challenge
//Using the following variables:

var goodDrivingRecord = true;
var age = 24;
/*Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
If the driving record is good and user is over 25 years old, they should get a discount on the car rental
If the user either has a good record or is over 25 years old, they should pay full price
If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental*/

if (goodDrivingRecord && age > 25){
    console.log("Yay, you have a discount waiting for you")
}
else if (goodDrivingRecord || age > 25) {
    console.log ("Your rental should be paid in full")
}
else if (age <=25 && !goodDrivingRecord){
    console.log("Oops, you need to have someone else to sign for the rental")
}


// Write a JavaScript program that prints out a String or Number: The printed value will depend
//on the value of a Number. If the Number is a multiple of 3, print "Fizz". If the Number is a multiple of 5, print "Buzz". If the Number is a multiple of both 3 and 5, print "FizzBuzz".
//If the Number is not a multiple of either, print the Number itself.

var number =20
if (number % 3 ===0 && number % 5 === 0) {
    console.log("FizzBuzz")
}
else if (number %3 === 0) {
    console.log("Fizz")
}
else if (number %5 === 0) {
    console.log("Buzz")

}

