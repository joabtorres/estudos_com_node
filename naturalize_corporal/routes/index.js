var express = require('express');
var router = express.Router();
var controller = require('./../controllers/participantesController');

/* GET home page. */
router.get('/', controller.findAll);

router.post('/add', controller.create);
router.get('/delete/:id', controller.remove);
module.exports = router;
