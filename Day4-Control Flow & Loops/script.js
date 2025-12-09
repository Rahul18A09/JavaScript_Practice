// 1. if / else

// let age = 20;

// if(age >= 18) {
//     console.log("You are an Adult!");

// }else {
//     console.log("You are minor");
// }

//2. if / else if / else

// let marks = 85;

// if(marks >= 90){
//     console.log("Grade A");

// }else if (marks >= 80){
//     console.log("Grade B");

// }else if (marks >= 70){
//     console.log("Grade C");

// }else {
//     console.log("Grade D");

// }

//3. switch statement
// -> use when we check same variable for multiple cases

// let day = 7;

// switch (day){
//     case 1: console.log("Monday");
//     break;

//     case 2: console.log("Tuesday");
//     break;

//     case 3: console.log("Wednesday");
//     break;

//     case 4: console.log("Thursday");
//     break;

//     case 5: console.log("Friday");
//     break;

//     case 6: console.log("Saturday");
//     break;

//     default: console.log("Sorry!, Today is Holiday");

// }

// 4. Comparison & Logical Operators (Short recap)

// Comparison

// ==  // equal
// === // Strict equal
// != // not equal
// !== // Strict not equal
// > , < , >= , <=

// Logical

// && and , || or, ! not

// example

// let age = 22;
// let hasId = true;

// if (age >= 18 || hasId){
//     console.log("You can Enter.");

// }else {
//     console.log("You can not enter.");

// }

// 5. Loop

// A. for loop

// let i = 0;

// for (i = 0; i <= 5 ; i++){
//     console.log("The number is: " , i);

// }

// B. While loop

// let i = 1;

// while (i <= 5){
//     console.log(i);
//     i++;
// }

// C. do... while loop

// let x =10;

// do{
//     console.log("Running once!");
//     x++;

// }while (x <= 5);

// D. for...of(best for arrays)

// let fruits = ["apple", "banana", "mango","cherry"];

// for (let fruit of fruits){
//     console.log(fruits);
// }

// Mini Challenges

// Challenge 1: Check if a number is even or odd

// let num = 16;

// if (num % 2 === 0){
//     console.log("even");
// }else {
//     console.log("odd");

// }

// Challenge 2: Print numbers from 1 to 10 using a loop

// let i  = 1;

// for (i = 1; i <= 10; i++){
//     console.log("Number is :", i);
// }

// Challenge 3: Given marks, print grade

// >=90 -> A
// >=75 -> B
// >=50 -> C
// else -> Fail

// let marks = 45;

// if (marks >= 90){
// console.log("Grade A");

// }else if (marks >= 75){
//     console.log("Grade B");

// }else if (marks >= 50){
//     console.log("Grade c");

// }else{
//     console.log("Sorry, You are Fail. Try next time.");

// }

// Challenge 4: Use switch to print month name

// let month = 12; //"April"

// switch (month) {
//   case 1:
//     console.log("January");
//     break;

//   case 2:
//     console.log("February");
//     break;

//   case 3:
//     console.log("March");
//     break;

//   case 4:
//     console.log("April");
//     break;

//   case 5:
//     console.log("May");
//     break;

//   case 6:
//     console.log("June");
//     break;

//   case 7:
//     console.log("July");
//     break;

//   case 8:
//     console.log("August");
//     break;

//   case 9:
//     console.log("September");
//     break;

//   case 10:
//     console.log("Octomber");
//     break;

//   case 11:
//     console.log("November");
//     break;

//   case 12:
//     console.log("December");
//     break;

//   default:
//     console.log("Invalid month!");
// }


// Challenge 5: Sum all numbers in an array

// let nums = [2, 5, 7, 3];
// let sum = 0;


// for (let x of nums){
 
// sum += x;  
// }
// console.log("The sum is :", sum);
