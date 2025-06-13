import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/prima-api", (request, response) => {
  const { query } = request;
  console.log("query", query);

  if (query.orderBy === "ASC") {
    // TODO something
  } else {
    // Do nothing
  }

  response.send("risposta inviata");
});

app.get("/seconda-api/:value", (request, response) => {
  const { params } = request;
  console.log("params", params);
  response.send("risposta inviata");
});

app.get("/game/:gameId/salvaLivello/:levelId", (request, response) => {
  const { params } = request;
  console.log("params", params);
  response.send("risposta inviata");
});

app.get("/terza-api", (request, response) => {
  const { headers } = request;
  console.log("headers", headers);
  response.send("risposta inviata");
});

app.post("/quarta-api", (request, response) => {
  const { body } = request;
  console.log("body", body);
  response.send("risposta inviata");
});

app.listen(3000, () => {
  console.log("Server partito sulla porta 3000");
});
