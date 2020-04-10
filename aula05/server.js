const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

let app = express();

let tarefas = [
  { 'tarefa': "Hello, Cruel World!" },
  { 'tarefa': "Acrescentar um Banco de dados" },
  { 'tarefa': "Tomar café" }
];

app.use(bodyParser.json());

app.get('/tarefas', (req, res) => {
  res.status(200).send(tarefas);
});

app.get('/tarefas/:id', (req, res) => {
  res.status(200).send(tarefas[req.params.id]);
});

app.post('/tarefas', (req, res) => {
  tarefas.push(req.body);
  res.status(200).send(tarefas);
});

app.put('/tarefas/:id', (req, res) => {
  tarefas[req.params.id] = req.body;
  res.status(200).send(tarefas);
});

app.delete('/tarefas/:id', (req, res) => {
  delete tarefas[req.params.id];
  res.status(200).send(tarefas);
});

app.get('/', (req, res) => {
  res.status(404).send('Você está na base!');
});


http.createServer(app).listen(8001, () => {
  console.log('Acesse: http://127.0.0.1:8001/');
});
