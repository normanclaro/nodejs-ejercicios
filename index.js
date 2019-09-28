/*
const http = require('http');

const colors = require('colors');

const handleServer = function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<p>simple texto</p>');
    res.end();
};

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server on port 3000'.yellow);
});
*/
const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', function(req, res){
    res.send('<h1>prueba node y express</h1>');
    res.end();
});

server.listen(3000, function(){
    console.log('Server on port 3000'.red);
});