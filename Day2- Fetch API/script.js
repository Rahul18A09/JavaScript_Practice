const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

async function fetchDataAndDisplay() {
  try {
    let response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error('HTTP error! Status: ${response.status}');
    }

    let data = await response.json();

    console.log("Data Fetched Successfully:", data);
    displayDataOnBrowser(data);
  } catch (error) {
    console.log("error:", "data fatching fail!");
    displayErrorOnBrowser(error.message);
  }
}

function displayDataOnBrowser(postdata) {
  const dataDisplayArea = document.getElementById("data-output");
  if (dataDisplayArea) {
    dataDisplayArea.innerHTML = `
        <h2>Post Details Fetched:</h2>
        <h3>${postdata.title}</h3>
        <p>${postdata.body}</p>

        `;
  }
}

function displayErrorOnBrowser(errorMessage) {
  const dataDisplayArea = document.getElementById("data-output");
  if (dataDisplayArea) {
    dataDisplayArea.innerHTML = `
    <h2 style="color:red;">Data Fetched failed:</h2>
    <h3>Error Details: ${errorMessage}</h3>
    <p>Please check the API url</p>
    `;
  }
}

fetchDataAndDisplay();
