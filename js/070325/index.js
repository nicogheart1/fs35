/*const nuovaPromise = new Promise((resolve, reject) => {
  console.log("sono una promise");

  const result = 5 + 6;

  if (result % 2 !== 0) {
    //reject("il numero è dispari");
  }

  resolve(result);
});

nuovaPromise.then((value) => {
    console.log(value)
}).catch(() => {
    console.error(error)
});*/

function promessa() {
  return new Promise((resolve) => {
    console.log("bla bla bla");

    resolve();
  });
}

const nuovaPromiseFn = () =>
  new Promise((resolve, reject) => {
    console.log("sono una promise");

    const result = 5 + 5;

    //console.log(pippo);

    if (result % 2 !== 0) {
      reject("il numero è dispari");
    }

    setTimeout(() => {
      resolve(result);
    }, 5000);
  });

nuovaPromiseFn()
  .then((response) => {
    console.log("Resolved", response);
  })
  .catch((error) => {
    console.log("Rejected", error);
    console.log("il codice prosegue");
  });
