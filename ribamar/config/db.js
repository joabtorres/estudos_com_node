// Este arquivo é utilizado para estabelece conexão com o banco.
var mongoose = require('mongoose');
var db;

module.exports = function(){
  if(!db){
    db=mongoose.connect('mongodb://localhost/pac');
  }
  return db;
}
