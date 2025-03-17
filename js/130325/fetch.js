function getPostsFromAPI() {
  return fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
}

getPostsFromAPI()
  .then((response) => response.json())
  .then((data) => console.log("data from promise", data))
  .catch((error) => {
    console.error(error);
  });

async function getPostsFromAPI_async() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const data = await response.json();
    console.log("data from async", data);
  } catch (error) {
    console.error(error);
  }
}
getPostsFromAPI_async();










function getUser(callback) {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      console.log("siamo qui", response);
      return response.json();
    })
    .then((data) => {
      console.log("Data: ", data);
      callback(data)
    })
    .catch((error) => {
      console.log(error);
    });
}

getUser((data) => console.log("dati estratti", data));