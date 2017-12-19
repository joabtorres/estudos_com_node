var express = require('express');
var router = express.Router();
var pacientes =  require('../controllers/pacienteController.js');

router.get('/', pacientes.findAll);

router.post('/add', pacientes.create);

router.get('/pacientes/:pacienteId', pacientes.findOne);

router.put('/pacientes/:pacienteId', pacientes.update);

router.get('/delete/:pacienteId', pacientes.delete);

module.exports =  router;
