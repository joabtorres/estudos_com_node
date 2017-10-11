var http = require('http');
var data = require('./modulodate');
http.createServer(function(pedido, resposta){
  resposta.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  resposta.write("Minha data atual é : "+data.myDate());
  resposta.end();
}).listen(8080);

console.log("Servidor Iniciado");
