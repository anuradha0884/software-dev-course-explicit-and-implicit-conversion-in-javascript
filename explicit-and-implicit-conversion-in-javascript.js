/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


// Part 1: Debugging Challenge
let result = "5" - 2;
console.log("The result is: " + result);  // No fix needed, implicit conversion works here

let isValid = ("false" === "false");  // Explicit comparison, now correctly reflects the intended result
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5;  // Explicit type conversion from string to number
console.log("Total Age: " + totalAge);  // Correct output: Total Age: 30


//Part 2: Own Examples
let num1 = "10";  // string
let num2 = 5;     // number
let resultImplicit = num1 * num2;  // Implicit conversion: string '10' is converted to a number
console.log("Implicit conversion result: " + resultImplicit);  // Output: 50



let str = "123abc";  // string with letters
let numberExplicit = Number(str);  // Explicit conversion to number
console.log("Before explicit conversion: " + str);  // Output: "123abc"
console.log("After explicit conversion: " + numberExplicit);  // Output: NaN



//Edge Case: NaN (Not-a-Number)
let edgeCaseString = "xyz";  // A string that can't be converted to a number
let edgeCaseNumber = Number(edgeCaseString);  // Explicit conversion
console.log("Edge case result: " + edgeCaseNumber);  // Output: NaN

let isValidNaN = isNaN(edgeCaseNumber);  // Check if the result is NaN
console.log("Is NaN: " + isValidNaN);  // Output: true
