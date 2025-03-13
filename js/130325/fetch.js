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
