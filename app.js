//Declaração do express
var express = require('express');
//Criação do App para uso do express
var app = express();
//Chamando o body-parser para ....
var bodyParser = require('body-parser');
//Chamando o Mongoose para utilizar o banco
var mongoose = require('mongoose');
//Dando Require na Routes, onde foi declarada as rotas.
var routes = require('./routes/routes.js');
//Declarando o servidor e subindo na porta '55000', console de aviso
var server = app.listen(55000);

//
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Declarando que o App vai usar rota '/'
app.use('/', routes);

//Função que faz o tratamento da URL inexistente
app.use(function (res) {
    'use strict';
 res.status(404).json({mensagem: 'URL Inexistente!'});
});

//Declarando onde o mongo vai se conectar(CrudCompleto)
mongoose.connect('mongodb://localhost/CrudCompleto', function (err) {
 'use strict'
 if(err){
  console.log("Erro ao conectar!", err);
 }else{
  console.log("MongoDB iniciado com Sucesso!");
 }
});

console.log('Servidor Express Iniciado na Porta %s', server.address().port);