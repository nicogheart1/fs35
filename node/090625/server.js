const createServer = require("node:http").createServer;

const server = createServer((request, response) => {
    // console.log("Ricevuta richiesta", request);

    //

    // if (databaseResult.length > 0) {
    //     response.statusCode = 200;
    // } else {
    //     response.statusCode = 500;
    // }

    response.statusCode = 200;

    let responseToSend;

    // TESTO
    // responseToSend = "Sono la risposta";
    // response.setHeader("Content-Type", "text/plain");
    // response.setHeader("Content-Length", responseToSend.length);

    // JSON
    responseToSend = JSON.stringify({ username: "mariorossi", score: 8656 });
    response.setHeader("Content-Type", "application/json");
    response.setHeader("Content-Length", responseToSend.length);

    // HTML
    // responseToSend = `<html><body><h1>Sono un bel titolo proveniente dal server</h1><body></html>`;
    // response.setHeader("Content-Type", "text/html");
    // response.setHeader("Content-Length", responseToSend.length);


    response.end(responseToSend);
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});