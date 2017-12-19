module.exports = function(){
  var db = require('./../config/db')();
  var Schema = require('mongoose').Schema;
  var participante = Schema({
    nome: String,
    peso: Number,
    altura: Number,
    imc: Number,
    gordura: Number
  });
  return db.model('Paciente', participante);
}
