var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var crudCompleto = new Schema({
    nome: String,
    email: String,
    telefone: [{
        telefone: String,
        ddd: String
    }],
    data_criacao: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('crudCompleto', crudCompleto);