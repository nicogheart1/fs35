import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan('dev'));

// prima delle API
app.use(function setCustomHeader(request, response, next) {
  console.log(
    "Siamo passati dal middleware in ingresso",
    request.url,
    request.method
  );
  response.setHeader("Custom-Header", "sono il valore custom");
  next();
});

app.get("/", (request, response, next) => {
  console.log("siamo dentro la GET");
  response.setHeader("Content-Type", "text/plain");
  response.send("Questa è la risposta");
  next();
});

// dopo le API
// app.use(function setResponseStatus(request, response, next) {
//   console.log("Siamo passati dal middleware in uscita");
//   response.status(201);
//   next();
// });

app.listen(3000, () => {
  console.log("Server partito sulla porta 3000");
});
