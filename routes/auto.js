'use strinct'

//importamos express puta aprende muy bien esta madre 

var express = require('express')
//importamos el controllador
var autoController = require('../controllers/auto')

//intacioamos objeto router

var api = express.Router();
//DEFINIMOS EL RECURSP GET COPN URL: /apí/autp/:id?,recibe
//un parametro y se procesa en el metodo de prueba del controllers
//auto controller el signo de interrogacion es que puede ser requeridio o no

api.get('/auto/:id?',autoController.getAuto);
api.get('/autos/', autoController.getAutos);
api.post('/auto', autoController.saveAuto);
api.put('/auto/:id?', autoController.updateAuto);
api.delete('/auto/:id?', autoController.deleteAuto);

// para utilizqarlo en otros ficjheros importamos
module.exports = api;