import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.setHeader("Content-Type", "text/plain");
  response.status(200).send("Questa è la risposta");
});

app.post("/test", (request, response) => {
    response.status(200).send("Questa è la risposta dell'API TEST");
});

app.listen(3000, () => {
  console.log("Server partito sulla porta 3000");
});
