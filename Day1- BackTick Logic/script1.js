// Fetch users from API

async function loadUsers() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    console.log(data);

    // Filter users whose company name contains "Group"
    let filteredUsers = data.filter((user) =>
      user.company.name.includes("Group")
    );

    // Create HTML using map + backtick
    let showUsers = "";

    filteredUsers.map((user) => {
      showUsers += `
        <div class="card" style="background:lightgray; padding:10px; margin:10px; border-radius:8px">
        <h3>${user.name}</h3>
        <p><strong>Email:</strong>${user.email}</p>
        <p><strong>Company:</strong>${user.company.name}</p>
        <p><strong>City:</strong>${user.city}</p>
        </div>
        `;
    });

    document.getElementById("users").innerHTML = showUsers;


  } catch (err ) {
        console.log("Error:", "fetching fail");
  } ;
  
};


loadUsers();