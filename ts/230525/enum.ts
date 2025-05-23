
enum CondizioneMeteo {
    Sole = "soleggiato",
    Pioggia = "piove",
    Nuvoloso = "nuvoloso",
    Nebbia = "nebbia",
    Neve = 2,
    Grandine = 22,
}

interface MeteoI {
    codice: CondizioneMeteo;
}

const meteoOggi: MeteoI = {
    codice: CondizioneMeteo.Nuvoloso
}

console.log("il codice meteo di oggi è:", meteoOggi.codice)


const codiceMeteo: CondizioneMeteo = CondizioneMeteo.Sole;

console.log("codice meteo:", codiceMeteo)




enum Gender {
    Uomo = "M",
    Donna = "F",
    Altro = "O"
}

const stundentGender: Gender = Gender.Uomo




enum Errori {
    NonAutorizzato = "345346345",
    CredenzialiErrate = "et4t45t45",
    ServerIrraggiungibile = "35654676y"
}

function manageError(code: Errori) {
    switch (code) {
        case Errori.CredenzialiErrate: {
            console.log("Le credenziali non sono corrette");
        }
        case Errori.NonAutorizzato: {
            console.log("Non sei autorizzato ad accedere");
        }
    }
}

