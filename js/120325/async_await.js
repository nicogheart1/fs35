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

/*promise1()
  .then((result) => console.log("risultato promise classica", result))
  .catch((error) => console.error(error));*/

async function run_promise1() {
  try {
    await promise1();
    console.log("risultato async/await", "promise 1");
  
    const result2 = await promise2();
    console.log("risultato async/await", result2);
  
    const result3 = await promise3();
    console.log("risultato async/await", result3);
  } catch (error) {
    console.error(error);
  }

}
run_promise1();
