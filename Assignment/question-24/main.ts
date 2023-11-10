// Tests for equality and inequality with strings
let string1: string = "apple";
let string2: string = "orange";

console.log("Equality Test:", string1 === string2);       // False
console.log("Inequality Test:", string1 !== string2);     // True

// Tests using the lower case function
let lowercaseString: string = "HELLO";

console.log("Lowercase Test:", lowercaseString.toLowerCase() === "hello");  // True

// Numerical tests
let number1: number = 10;
let number2: number = 5;

console.log("Equality Test:", number1 === number2);          // False
console.log("Inequality Test:", number1 !== number2);        // True
console.log("Greater Than Test:", number1 > number2);        // True
console.log("Less Than Test:", number1 < number2);           // False
console.log("Greater Than or Equal To Test:", number1 >= number2); // True
console.log("Less Than or Equal To Test:", number1 <= number2);    // False

// Tests using "and" and "or" operators
let isSunny: boolean = true;
let isWarm: boolean = false;

console.log("AND Operator Test:", isSunny && isWarm);    // False
console.log("OR Operator Test:", isSunny || isWarm);     // True

