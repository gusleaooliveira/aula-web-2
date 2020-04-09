const express = require('express');
const http = require('http');


let app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, Cruel World!');
});


http.createServer(app).listen(8001, () => {
  console.log('Acesse: http://127.0.0.1:8001/');
});
