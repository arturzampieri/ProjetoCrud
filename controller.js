//Criação de uma variavel e requisição da model
var userModel = require('../models/models.js');
//POST - Cadastra Usuário (Nome/Email /DDD /Telefone)
exports.cadastraUsuario = function (req, res) {
'use strict';
var data = new userModel({
 nome: req.body.nome,
 email: req.body.email,
 ddd: req.body.ddd,
 telefone: req.body.telefone
});

data.save(function(err, data) {
 res.status(200).jsonp(data);
});
};
//Fim POST

//GET - Procura todos os registros no banco de dados
exports.consultaUsuarioCadastrado = function(req, res) {
    'use strict'
 userModel.find(function(err, data) {
 res.status(200).jsonp(data);
});
};
//Fim GET

//Procura Pelo ID e Deleta Tratando Erros (DELETE)
exports.deletaUsuarioById = function(req, res) {
    'use strict'
 userModel.findById({_id:req.params.id}, function(err, result){
  if(!result){
   res.status(422).jsonp({status:422,message:'Id não encontrado na base!'});
  }else{
   userModel.remove({_id:req.params.id}, function(err, result){
    res.status(200).jsonp({status:200,message:'Usuário Deletado com Sucesso'});
   })
  }
 })
 //Fim Delete
};