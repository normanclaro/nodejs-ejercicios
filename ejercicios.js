const fs = require('fs');
/*
EJERCICIO 1
const os = require('os');
console.log(os.platform());
console.log(os.release());
console.log('memoria libre ', os.freemem(), 'bytes');
console.log('memoria total ', os.totalmem(), 'bytes');

EJERCICIO 2
const fs = require('fs');

fs.writeFile('./texto.txt', 'linea uno', function(err){
    if(err){
        console.log(err, 'error');
    }
    console.log('archivo creado');
});
console.log('ultima linea de codigo');
*/
fs.readFile('./texto.txt', function (err, data){
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});