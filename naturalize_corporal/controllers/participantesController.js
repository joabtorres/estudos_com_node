var model = require('./../models/participantesModel')();
//insert
exports.create = function(req, res, next){
  var body = req.body;
    model.create(body, function(err, task){
      if(err){
        throw err;
      }
      res.redirect("/");
    })
}

//select
exports.findAll =  function(req, res, next){

  model.find(null, function(err, participante){
    if(err){
      throw err;
    }
    res.render('index', { title: 'naturalize_corporal', participantes:participante});
  }).sort({'imc': 1});
}

//delete
exports.remove = function(req, res, next){
  var id = req.params.id;
  model.remove({_id: id}, function(err, data){
    if(err){
      throw err;
    }
    res.redirect("/");
  })
}
