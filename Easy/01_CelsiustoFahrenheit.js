//Celsius to Fahrenheit
//Problem Statement
/*
Write a program to convert temperature from Celsius to Fahrenheit.

Input
The input consists of a float number.

Output
Output will be the Fahrenheit value.

Constraints
The program should print the number with exactly two decimal points.
Example:
Enter the temperature in Celsius
Input: 10
Output:
The temperature in Fahrenheit is: 89.60
*/
//Solution 01
let c = 32;
let f;
f = c * (5 / 9) + 32;
console.log(f.toFixed(2));


//Sulution 02 Using Function

funtion celtoFar(input) {
    console.log(input*5/9+32);
}
celtoFar(10);
