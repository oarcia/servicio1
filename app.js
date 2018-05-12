//importamos body-parse y express
var bodyParser = require('body-parser')
var express = require('express')

// declaramos la variable app como instancia de express
var app = express()

//importamos las rutas del recurso para autos
var api = require('./routes/auto')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//url de la api
app.use('/api',api);

//para utilizarlo ebn otyros ficheros e importar
module.exports = app;
