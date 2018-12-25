var express = require('express');

var app = express();
app.get('/hola', function (req,res) { res.send ("Hola Mundo")});

app.listen(8080, '0.0.0.0');
module.exports = app ;
