//Declarando o express
var express = require('express');
//Criação da variavel rotas e utilizando routes do express
var rotas = express.Router();
//Criação da variavel e chamando a controller
var desafioCRUD = require('../controller/controller.js');

//Criação da Rota GET
rotas.route('/consultaUsuarioCadastrado')
    .get(desafioCRUD.consultaUsuarioCadastrado);

//Criação da Rota POST
rotas.route('/cadastraUsuario')
    .post(desafioCRUD.cadastraUsuario);

//Criação da Rota DELETE
rotas.route('/deletaUsuarioById/:id')
    .delete(desafioCRUD.deletaUsuarioById);

//Criação da Rota PATH
// rotas.route('/atualizaUsuarioCadastrado/:id')
//  .path(desafioCRUD.atualizaUsuarioCadastrado);

////Criação da Rota PUT
// rotas.route('/atualizaCadastro/:id')
//  .path(desafioCRUD.atualizaCadastro);

//Exportando as rotas para uso.
module.exports = rotas;