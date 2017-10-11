var http = require('http');
http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
  res.write("Olá Mundo!");
  res.write('Hello World');
  res.end();
}).listen(8080);
console.log("Servidor Iniciado");
