var Rocker = require('./model/rocker');
var Controller = require('./controller');


module.exports = function(app){
    app.get('/api/rocker', Controller.getRocker);

    app.post('/api/rocker', Controller.setRocker);

    app.put('/api/rocker/:rocker_id', Controller.updateRocker);

    app.delete('/api/rocker/:rocker_id',Controller.removeRocker);

    app.get('*', function(req, res){
        res.sendfile('./angular/index.html');
    });
};