// Greater in Three
/*
Problem Statement
Write a program that finds the maximum of three numbers entered by the user.

Input
The input consists of 3 integers.

Output
Output the maximum

Constraints
-2 31 ≤ |S| ≤ 231 - 1
Example:
Enter three numbers

Input:

*/
//Solutions

function main (input) {
    let data =input.split(" ");
    let num1 = parseInt(data[0]);
    let num2 = parseInt(data[1]);
let num3 = parseInt(data[2]);
let max = Math.max(num1, num2, num3);
console.log(max);
}