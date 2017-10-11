var http = require('http');
var url = require('url');

http.createServer(function (pedido, resposta){
    resposta.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});

    var q = url.parse(pedido.url, true).query;
    var texto = q.ano + " " + q.mes;

    resposta.write(texto);
    resposta.end();
}).listen(8080);

console.log('Servidor Iniciado!');
