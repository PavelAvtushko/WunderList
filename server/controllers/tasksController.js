const Tasks = require('../model/Tasks.js');

exports.getAllTasks = function(req, res) {
    let userName = req.query.user;
    Tasks.getAllTasks(userName, function(err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    });
}


exports.deleteById = function(req, res) {
    let userName = req.query.user;
    Tasks.deleteById(userName, +req.params.id, function(err, result){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
}


exports.putNewTask = function(req, res) {
    let userName = req.query.user;
    Tasks.putNewTask(userName, req.body, function(err, result){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        return res.send(result.ops[0]);;
    });
}


exports.deleteAllTasks = function(req, res){
    let userName = req.query.user;
    Tasks.deleteAllTasks(userName, function(err, result){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
}


exports.updateTask = function(req, res){
    let userName = req.query.user;
    Tasks.updateTask(userName, +req.params.id,
        createTaskData(req),
        function(err, result){
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
        res.sendStatus(200);
    });
}


exports.logUser = function(req, res) {
    if (req.body.userName !== undefined) {
        res.json({
            'name': req.body.userName,
            'access' : true
        });
    } 
    else res.send(404);
}


function createTaskData(req){
    let newData = {    
            status: req.body.status,
            name: req.body.name,
            lastModifyDate: Date.now(),
            id: req.body.id,
            description: req.body.description
        };
    return newData;
}
