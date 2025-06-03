// server.mjs
// Module JS
import { createServer } from 'node:http';

// server.js
// CommonJS
// const createServer = require('node:http').createServer;

const somma = (a, b) => a + b;

const server = createServer((req, res) => {
  const risultato = somma(5, 3);
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(`La somma di 5 e 3 è: ${risultato}`);
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
