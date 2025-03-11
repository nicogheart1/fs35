/*fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
  .then((response) => {
    console.log("siamo qui", response);
    return response.json();
  })
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error(error);
  });

*/

function getPostsFromAPI() {
  return fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
}

getPostsFromAPI()
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.error(error);
  });
