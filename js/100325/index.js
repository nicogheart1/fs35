const promise1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise1 completata");
    }, 2000);
  });

const promise2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise2 completata");
    }, 3000);
  });

const promise3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise3 completata");
    }, 5000);
  });

promise1()
  .then((text) => {
    console.log(text);
    return promise2();
  })
  .then((text2) => {
    console.log(text2);
    return promise3();
  })
  .then((text3) => {
    console.log(text3);
  })
  .catch((error) => {
    console.error("Errore:", error);
  });

Promise.all([promise3(), promise2(), promise1()])
  .then((results) => {
    console.log("Promise all:", results);
  })
  .catch((error) => console.log(error));

Promise.race([promise3(), promise2(), promise1()])
  .then((result) => {
    console.log("Promise race:", result);
  })
  .catch((error) => console.log(error));
