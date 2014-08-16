var http = require ('http');
var server = http.createServer();

function control (peti, resp){
resp.writeHead (200,{'content-type': 'text/plain'});
resp.write('hola,Mundo');
resp.end();

}

server.on('request',control);
server.listen(8080);
