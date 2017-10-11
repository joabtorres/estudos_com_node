//modulo http - servidor
var http = require('http');
//modulo fs - modulo para acesso de arquivo
var fs = require('fs');

http.createServer(function(pedido, resposta){

    fs .readFile('sobre.html', function(erro, arquivo){
      resposta.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
      resposta.write(arquivo);
      resposta.end();
    });

}).listen(8080);

console.log('Servidor Inicializador!');
