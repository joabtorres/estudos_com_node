//chamando os modulos
var http = require('http');
var fs = require('fs');

//criando método para inicia servidor.
var server = http.createServer(function (request, response){
    var page = 'index.html'
    if(request.url != "/"){
      page = request.url+'.html';
    }
    fs.readFile('./public/'+page, function(error, data){
      var headStatus = 200;
      //se houver algum erro ao carregamento do aquivo ele carrega a página de erro 404.html
      if(error){
        var headStatus=404;
        data = fs.readFileSync('./public/error/404.html');
      }
      response.writeHead(headStatus, {'Content-Type': 'text/html; charset=utf-8'});
      response.write(data);
      response.end();
    });
});

server.listen(3000); //inicializando servidor!
console.log("Servidor inicializado!");
