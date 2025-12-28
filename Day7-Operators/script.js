// let result1 = "Hello" + 2 + 3;
// console.log(result1);

// let result2 = " " - 2 + 3;
// console.log(result2);

// let result3 = false + true;
// console.log(result3);

// let result4 = 8 / "2";
// console.log(result4);

// let result5 = "5" * "2";
// console.log(result5);

// let result6 = 10 + 20 + " units";
// console.log(result6);

// let result7 = "$" + 7 + 8;
// console.log(result7);

// let result8 = "10" - 2;
// console.log(result8);

// let result9 = "apples" - 2;
// console.log(result9);

// let result10 = " -5 " + 3;
// console.log(result10);

// let result11 = null + 1;
// console.log(result11);

// let result12 = " -9 " - 5;
// console.log(result12);

// let result13 = undefined + 1;
// console.log(result13);

// let result14 = " \t \n" - 2;
// console.log(result14);

// let item1Price = prompt("Enter the price of item 1:", 20);
// let item2Price = prompt("Enter the price of item 2:", 30);

// alert(item1Price + item2Price) //"2030" Why?

// this is happen beacuse prompt returns always String

// alert(Number(item1Price) + Number(item2Price));

// alert(8 >= 6);
// alert("orange" < "banana");
// alert("21" <= "12");
// alert(null != undefined);
// alert(undefined !== null);
// alert(null == "\n0\n")
// alert(null === +"\n0\n")

// if ("0") {
//   alert('Greeting: Hello');
// }

// let answer = prompt("What is the official name of Javascript?");
// if(answer === "ECMAScript"){
//     alert("Correct! JavaScript’s official name is ECMAScript.");

// }else{
//     alert("Wrong answer. Try again!");
// }

// let input = prompt("Enter a number:");

// let number = Number(input);

// if (number > 0) {
//   alert("The number is positive.");
// } else if (number < 0) {
//   alert("The number is negative.");
// } else if (number === 0) {
//   alert("The number is Zero.");
// } else {
//   alert("Invalid input. Please enter a valid number.");
// }


// let result;
// let a = 10;
// let b = 20;
 
// if (a + b < 40) {
//   result = 'Under Threshold';
// } else {
//   result = 'Above Threshold';
// }

// console.log(result);


let userRole = prompt("What is your identification?");
let customMessage;
 
if (userRole === 'EmployeeRole') {
  customMessage = 'Greetings, Employee!';
} else if (userRole === 'ManagerRole') {
  customMessage = 'Welcome, Manager!';
} else if (userRole === '') {
  customMessage = 'Invalid role';
} else {
  customMessage = 'Unknown role';
}