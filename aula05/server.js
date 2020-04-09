const express = require('express');
const http = require('http');


let app = express();

app.get('/', (req, res) => {
  return {'mgs': 'Hello, Cruel world!'}
});
