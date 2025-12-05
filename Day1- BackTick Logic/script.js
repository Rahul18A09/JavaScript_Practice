// let name = "Rahul";
// let message = `Hello, ${name}`;
// console.log(message);

// Example 1 — Display Dynamic Text in HTML

// let firstName = "Rahul";
// let lastName = "Bharada";

// document.getElementById("greet").innerHTML = `Hello, ${firstName} ${lastName}. WelCome to the Coding World.!`;

// Example 2 — Add Multiple Lines of HTML Dynamically

// let title = "My Profile";
// let role = "Frontend Developer";

// document.getElementById("card").innerHTML = `
//  <h2>${title}</h2>
//  <p>${role}</p>
//  <button>Contact Me</button>
//  `;

// Example 3 — Create an arr of name & and wish every using forEach

// let arr = ["Rahul", "Divyesh", "Jinish", "Parth", "Dallo"];
// let place = "Navsari";

// let data = "";

// arr.forEach((val)=>{
//     console.log(val);
//   data += `
//   <h3>Hello ${val} Good Morning</h3>
//   <p>Please Come To ${place}</p>

//   `
// });
// document.getElementById("card").innerHTML = data;

Example 4 — Create Dynamic List Using Loop

let skills = ["HTML", "CSS", "JAVASCRIPT", "JQUERY"];

let listItem = "";

skills.forEach((skill) => {
  // console.log(skill);

  listItem += `
     <ul>
     <li>${skill}</li>
     </ul>
    `;
});

document.getElementById("card").innerHTML = listItem;
