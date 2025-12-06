const apiUrl = "https://jsonplaceholder.typicode.com/posts";

async function fetchMultiplePosts() {
  try {
    let response = await fetch(apiUrl);

    if (!response.ok) {
      throw Error("HTTP error! status: ${response.status}");
    }

    let data = await response.json();
    console.log("All Posts:", data);

    let filteredPosts = data.filter((post) => post.userId === 1);
    console.log("Filtred posts:", filteredPosts);

    displayPosts(filteredPosts);
  } catch (error) {
    console.log("Error:", error.message);
    displayError(error.message);
  }
}

function displayPosts(posts) {
  const dataDisplayArea = document.getElementById("data-output");

  let postsHTML = `
    <h2>Filtered Posts (userID = 1)</h2>  
    `;

  posts.map((post) => {
    postsHTML += `
        <div style="border:1px solid black; border-radius:10px; padding:10px; margin-bottom:10px; background:lightblue;">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <small>Post ID: ${post.id}</small>
        </div>
        `;
  });

  dataDisplayArea.innerHTML = postsHTML;
}

function displayError(message) {
  const dataDisplayArea = document.getElementById("data-output");

  dataDisplayArea.innerHTML = `
<h2 style="color:red;">Failed to fetch data</h2>
<p>${message}</p>
`;
};

fetchMultiplePosts();
