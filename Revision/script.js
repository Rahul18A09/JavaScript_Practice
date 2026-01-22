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

// function outer() {
//   let x = 10;

//   function inner() {
//     console.log(x);
//   }
//   inner();
// }
// outer();

// Now Let’s Upgrade This to a CLOSURE

// function outer(){
//     let x = 10;

//     return function inner(){
//         console.log(x);

//     };
// }

// const fn  = outer();
// fn();

// function outer() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);

//   };
// }

// const a = outer();
// a();
// a();

// 13️⃣ Callback Functions

// function greet (name, callback) {
//     console.log("Hi" + name);
//     callback();

// }

// function sayBye(){
//     console.log("Bye");

// }
// greet("Rahul", sayBye);

// 14️⃣ Higher Order Functions (HOF)

// A function that takes another function as argument OR returns a function.

// function calculate(a,b, operation){
//     return operation(a, b);
// }

// function add(x, y){
//     return x + y;

// }

// console.log(calculate(2,3,add ));

// Array Methods

// map() → transform array

// const nums  = [1,2,3];

// const double = nums.map(n => n*2);
// console.log(double);

// filter() → condition

// const nums = [1,2,3,4,5,6];

// const even = nums.filter(n => n % 2 === 0);
// console.log(even);

// reduce() → single value

// const nums = [1,2,3,4,5];

// const sum  = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// const arr = [1, 2, 3, 4, 5, 6];

// const result = arr.map(n => n*2)
//    const result = arr.filter(n => n > 4)
// const result = arr.reduce((a, b) => a + b, 0);

// console.log(result);

// const nums = [10,20,30];

// const out = nums.reduce((acc, curr) => acc + curr , 5);

// console.log(out);

// promise

const mypromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed successfully");
  } else {
    reject("Task failed");
  }
});

mypromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Success");
//     }, 1000);
// });

// promise.then(res => console.log(res));
// promise.catch(reject => console.log(reject));

// console.log("Promise started");
// const promise = new Promise((resolve, reject) => {

//   setTimeout(() => {

//     let success = true;

//     if (success) {
//       resolve("Data received");
//     }else {
//         reject("Data not received");
//     }
//   }, 2000);
// });

// promise.then((res) => console.log(res)).catch
// ((err) => console.log(err));

// Important Array Methods (INTERVIEW MUST 🔥)

// let fruits = ["apple", "banana", "mango"];

// console.log(fruits[2]);

// fruits[1] = "orange";
// fruits[2] = "grapes";

// fruits.push("grapes");
// fruits.pop();
// fruits.unshift("kiwi");
// fruits.shift();
// console.log(fruits.length);

// Looping Arrays
// let fruits = ["apple", "banana", "mango"];

// for (let i = 0;  i < fruits.length;i++ ){
//     console.log(fruits[i]);
// }

// fruits.forEach(fruits => {
//     console.log(fruits);

// })

// let arr = [1 ,2 ,3];
// arr.push(4);
// arr.shift();
// console.log(arr);

// Object

// let user = {
//     name: "Rahul",
//     age: 26,
//     isDeveloper:true
// };

// user.city = "Navsari";
// user.age = 25;
// delete user.isDeveloper;
// console.log(user.name, user.age, user.isDeveloper);

// console.log(user["age"]);
// console.log(user);

// Object With function

// let person = {
//     name: "Rahul",
//     greet(){
//         console.log("Hello" +" "+  this.name);

//     }
// };

// person.greet();

// Looping Objects

// for...in

// for (let key in user){
//     console.log(key, user[key]);

// }

// Object Methods (INTERVIEW USEFUL)

// let user = {
//   name: "Rahul",
//   age: 26,
//   isDeveloper: true,
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// Array of Objects

// const users = [
//     {name: "A", age:20},
//     {name: "B", age:22},
//     {name: "C", age:26},
//     {name: "D", age:30},
// ];

// const adults = users.filter(user => user.age >= 25);
// console.log(adults);

// const user = {
//     name: "Js",
//     skills: ["HTML", "CSS", "JS"]
// };

// user.skills.push("React");
// console.log(user.skills);

// SPREAD OPERATOR (...)

// const nums = [1 ,2 ,3];
// const newNums = [...nums, 4 ,5];

// console.log(newNums);

// const fruits = ["apple", "banana", "grapes" ]

// const newfruits  = [...fruits,"mangoes", "papaya"]

// console.log(newfruits);

// const a  = [1 ,2];
// const b = [...a];

// b.push(3,4,5);
// console.log(b);

// Spread with Object

// const user ={name:"Rahul", age: 25};
// const newuser = {...user, city:"Navsari"};
// console.log(newuser);

// REST OPERATOR (...)

// Rest in Function Parameters
// function sum(...numbers){
//     console.log(numbers);

// }
// sum(1,2,3,4);

// const arr = [10, 20, 30,40, 50];

// const[first,second, ...rest]= arr;

// console.log(first, second);
// console.log(rest);

// const obj = {a: 1, b: 2, c: 3};
// const {a, ...rest} = obj;

// console.log(a);
// console.log(rest);

// function test(a, ...rest){
//     console.log(a);
//     console.log(rest);

// }

// test(10, 20,30,40);


function demo(a, ...rest) {
  console.log(a);
  console.log(rest);
}

demo(10, 20, 30, 40);