const db = require('../db.js');

exports.all = function(callback) {
    db.get()
        .collection('listOfTasks')
        .find()
        .toArray (
            function (err, docs) {
                callback(err, docs)
            }
        )
}

exports.deleteById = function (itemId, callback) {
    db.get()
        .collection('listOfTasks')
        .deleteOne({id: itemId},
        function(err, result){
            callback(err, result);
        })
}


exports.putNewTask = function(newData, callback) {
    db.get().collection('listOfTasks').insert(newData, function(err, result){
        callback(err, result);
    })
}


exports.deleteAllTasks = function(){
    db.get().collection('listOfTasks').drop();
}

