var http = require('http');

http.createServer(function(pedido, resposta){
  resposta.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8'});
  resposta.write(pedido.url);
  resposta.end();
}).listen(8080);

console.log("Inicialização do servidor!");
