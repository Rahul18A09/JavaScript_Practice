// var name = "Rahul";
// var name = "Asha";
// re-declared
// console.log(name);

// let age = 25;
// age = 26;
// console.log(age);

// {
//     let age = 30;
//     console.log(age);

// }

// const x = 10;
// x= 20;
// console.log(x);

// const user =  {name: "Rahul"};
// console.log(user.name);

// user.name = "Asha";
// console.log(user.name);

// const arr = [1,2,3];
// arr.push(4,5,6);
// console.log(arr);

// let name = "Rahul";
// console.log(name);

// let age = 26;
// console.log(age);

// let isDev = true;
// console.log(isDev);

// let x;
// console.log(x);

// let y = null ;
// console.log(y);

// console.log(typeof null);

// let user = {name: "Rahul", age: 26};
// let nums = [1,2,3,4];
// function greet(){
//     console.log("Hello World!");
// }

// greet();

// let a = 10;
// let b = 15;

// [a,b] = [b, a]

// console.log(a);
// console.log(b);

// let obj1 = {value:10};
// let obj2 = obj1;
// obj2.value = 20;
// console.log(obj1);

// let a = null;
// let b;

// console.log( a == b);

// console.log(a == b);
// console.log(a === b);

// let age = 18;
// let result = age >= 18 ? "Adult" : "Minor";
// console.log(result);

// console.log("5" + 2);

// console.log("5" - 2);

// console.log("5" * "2");

// console.log(true + 1);

// console.log("10" - "5" + 2);
// console.log("10" + "5" - 2);

// if/else

// let marks = 45;

// if(marks >= 35){
// console.log("Pass");
// }else {
//     console.log("Fail");

// }

// else/if

// let score = 85;

// if(score > 80) {
//     console.log("Garde A");

// }else if (score > 70){
//     console.log("Grade B");

// }else if (score > 60) {
//     console.log("Grade C");

// }else {
//     console.log("Grade D");

// }

// switch statement

// let day = 6;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;

//   case 2:
//     console.log("Tuesday");
//     break;

// case 3:
//     console.log("Wednesday");
//     break;

// default:
//     console.log("Invalid Input");

// }

// 7️⃣ Loops in JavaScript
//
// 🔹 for loop

// let i = 1;

// for(i = 1; i <= 5; i++){
//     console.log(i);

// }

// while loop

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// 🔹 do...while (runs at least once)

// let x = 5;

// do {
//     console.log(x);
// }while ( x < 3);

// let i = 1;

// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 5000);
// }

// 8️⃣ Functions in JavaScript
// 🔹 Function Declaration

// function add(a, b) {
//   return a * b;
// }

// let ans = add(3 ,4 );
// console.log(ans);

// const add = (a, b) => a + b;
// let ans = add(5 ,6);
// console.log(ans);

// sayHi();

// function sayHi() {
//   console.log("Hello world!");
// }

// let x  = 10;
// function test(){
//     let y = 20;
//     console.log(y);
// }
// // console.log(x);
// test();

// if (true){
//     let a = 5;
//     const b = 10;
//     console.log(b);
// }

// console.log(a);

// const user = {
//     name: "Rahul",
//     age:25,
//     greet(){
//         console.log("Good Morning!");
//         console.log(user.name);

//     }
// };

// user.greet();

// Arrow Function & this

// const obj = {
//   name: "JS",
//   show: function () {
//     const inner = () => {
//       console.log(this.name);
//     };

//     inner();
//   },
// };

// obj.show();
