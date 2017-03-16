var Rocker = require('./model/rocker');

//Obtiene datos de la base
exports.getRocker = function(req, res){
    Rocker.find(
        function(err, rocker){
            if(err){res.send(err)};
            res.json(rocker);
        }
    );
}

exports.setRocker = function(req, res){
    Rocker.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad:req.body.edad
    },
        function(err, rocker){
            if(err)
                res.send(err);
            Rocker.find(function(err, rocker){
                if(err)
                    res.send(err)
                res.json(rocker);
            });
        });
}

exports.updateRocker = function(req, res){
    Rocker.update({_id:req.params.rocker_id},
                    {$set:{nombre: req.body.nombre, apellido: req.body.apellido, edad:req.body.edad}},
                    function(err, rocker){
                        if(err){
                            res.send(err);
                        }
                        Rocker.find(function(err, rocker){
                                    if(err)
                                        res.send(err)
                                    res.json(rocker);
                        });
                    });
}

exports.removeRocker = function(req, res){
    Rocker.remove({_id:req.params.rocker_id},
                    function(err, rocker){
                        if(err)
                            res.send(err);
                        Rocker.find(function(err, rocker){
                            if(err)
                                res.send(err)
                            res.json(rocker);
                        });
                    });
}