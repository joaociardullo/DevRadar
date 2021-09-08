const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebSocket } = require('./websocket.js');

const app = express();

const server = http.Server(app)
setupWebSocket(server)

mongoose.connect('mongodb+srv://joao:joao@cluster0-xnmvo.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true //tirar os erros na conexaoo
});

app.use(cors())
app.use(express.json());
app.use(routes);

//Metodos Http -get, post-atarveis do insomina , put , delete

//tipos de parametros 
//query params(filtros, ordenação, paginação)
//routes Params(Indentificar um recurso na alteração ex ID:)
//body: resquest.body(dados para criação  ou alteração de um registro )

//mongoDB


server.listen(3333);

