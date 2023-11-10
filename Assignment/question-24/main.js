// Tests for equality and inequality with strings
var string1 = "apple";
var string2 = "orange";
console.log("Equality Test:", string1 === string2); // False
console.log("Inequality Test:", string1 !== string2); // True
// Tests using the lower case function
var lowercaseString = "HELLO";
console.log("Lowercase Test:", lowercaseString.toLowerCase() === "hello"); // True
// Numerical tests
var number1 = 10;
var number2 = 5;
console.log("Equality Test:", number1 === number2); // False
console.log("Inequality Test:", number1 !== number2); // True
console.log("Greater Than Test:", number1 > number2); // True
console.log("Less Than Test:", number1 < number2); // False
console.log("Greater Than or Equal To Test:", number1 >= number2); // True
console.log("Less Than or Equal To Test:", number1 <= number2); // False
// Tests using "and" and "or" operators
var isSunny = true;
var isWarm = false;
console.log("AND Operator Test:", isSunny && isWarm); // False
console.log("OR Operator Test:", isSunny || isWarm); // True
