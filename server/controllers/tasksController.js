const Tasks = require('../model/Tasks.js');

exports.getAllTasks = function(req, res) {
    let userName = req.query.user;
    Tasks.getAllTasks(userName, function(err, docs) {
        if (err) {
            return res.sendStatus(500);
        }
        res.send(docs);
    });
};


exports.deleteById = function(req, res) {
    let userName = req.query.user;
    Tasks.deleteById(userName, +req.params.id, function(err, result){
        if (err) {
            return res.sendStatus(500);
        }
        if (result) {
            res.sendStatus(200);
        }
    });
};


exports.putNewTask = function(req, res) {
    let userName = req.query.user;
    Tasks.putNewTask(userName, req.body, function(err, result){
        if (err) {
            return res.sendStatus(500);
        }
        return res.send(result.ops[0]);
    });
};


exports.deleteAllTasks = function(req, res){
    let userName = req.query.user;
    Tasks.deleteAllTasks(userName, function(err, result){
        if (err) {
            return res.sendStatus(500);
        }
        if (result) {
            res.sendStatus(200);
        }
    });
};


exports.updateTask = function(req, res){
    let userName = req.query.user;
    Tasks.updateTask(userName, +req.params.id,
        createTaskData(req),
        function(err, result){
            if (err) {
                return res.sendStatus(500);
            }
            if(result) {
                res.sendStatus(200);
            }
    });
};


exports.logUser = function(req, res) {
    if (req.body.userName) {
        res.json({
            'name': req.body.userName,
            'access' : true
        });
    } 
    else res.send(404);
};



//TODO - add to database
exports.addPhoto = function(req, res) {
    res.send(req.body);
};


function createTaskData(req){
    return {    
            status: req.body.status,
            name: req.body.name,
            lastModifyDate: Date.now(),
            id: req.body.id,
            description: req.body.description
        };
}
