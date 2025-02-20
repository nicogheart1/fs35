let numeroPartecipanti = 10;

function startRace() {
  console.log("La gara è iniziata");
}

//startRace();

function raceCanStart(callback) {
  if (numeroPartecipanti >= 5) {
    callback();
  } else {
    console.log("Non ci sono abbastanza partecipanti");
  }
}

setTimeout(function () {
  raceCanStart(() => {
    console.log("La gara puù partire");
    startRace();
  });
}, 3000);
