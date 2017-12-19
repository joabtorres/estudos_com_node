// Modulo utilizado para criar a collection que armazena as informações no banco;
module.exports = function(){
  var db = require('./../libs/connect_db')();
  var Schema = require('mongoose').Schema;
  var participante = Schema({
    nome: String,
    peso: Number,
    altura: Number,
    imc: Number,
    gordura: Number
  });
  return db.model('participantes', participante);
}
