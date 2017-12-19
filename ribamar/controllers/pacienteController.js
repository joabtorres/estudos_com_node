var paciente = require('./../models/pacienteModel')();

exports.create = function(req, res, next){
    if(req.body.content){
        res.status(400).send({message: 'O paciente não pode estar vazio'});
    }
    var dados =  new paciente({
        nome: req.body.nome,
        peso: req.body.peso,
        altura: req.body.altura,
        gordura: req.body.gordura,
        imc: req.body.imc
    });

    dados.save(function(err, data){
        console.log(data);
        if(err){
            console.log(err);
            res.status(500).send({message: 'Ocorreu algum erro ao criar o paciente'});
        }else{
            res.redirect('/');
        }
    });
};

exports.findAll = function(req, res, next){
    paciente.find(null, function(err, paciente){
        if(err){
            res.status(500).send({message: 'Ocorreu algum erro ao recuperar os pacientes'});
        }else{
          res.render('index', { title: 'Naturalize Corporal', pacientes: paciente });
        }
    });
};

exports.findOne = function(req, res, next){
    paciente.findById(req.params.pacienteId, function(err, data){
        if(err){
            res.status(500).send({message: 'Não foi possível recuperar o paciente com id.' + req.params.pacienteId});
        }else{
            res.send(data);
        }
    });
};
exports.update = function(req, res, next){
    paciente.findById(req.params.pacienteId, function(err, paciente){
        if(err){
            res.status(500).send({message: 'Não foi possível encontrar o paciente com id.' + req.params.pacienteId});
        }

        paciente.nome = req.body.nome;
        paciente.peso = req.body.peso;
        paciente.altura = req.body.altura;
        paciente.gordura = req.body.gordura;
        paciente.imc = req.body.imc;

        paciente.save(function(err, data){
            if(err){
                res.status(500).send({message: 'Não foi possível atualizar o paciente com id.' + req.params.pacienteId});
            }else{
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res, next){
    paciente.remove({_id: req.params.pacienteId}, function(err, data){
        if(err){
            res.status(500).send({message: 'Não foi possível excluir o paciente com id.' + req.params.id});
        }else{
            res.send({message: 'Paciente excluido com sucesso!'});
        }
    });
};
