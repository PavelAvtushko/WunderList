const Tasks = require('../model/Tasks.js');

exports.getAllTasks = function(req, res) {
    Tasks.getAllTasks(function(err, docs){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    });
}

exports.deleteById = function(req, res) {
    Tasks.deleteById(+req.params.id, function(err, result){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
}


exports.putNewTask = function(req, res) {
    Tasks.putNewTask(req.body, function(err, result){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        return res.send(result.ops[0]);;
    });
}


//удаляет все записи из базы данных
exports.deleteAllTasks = function(req, res){
    Tasks.deleteAllTasks(function(err, result){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
}


exports.updateTask = function(req, res){
    Tasks.updateTask(+req.params.id,
        createTaskData(req),
        function(err, result){
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
        res.sendStatus(200);
    });
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
