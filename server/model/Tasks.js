const db = require('../db.js');

exports.getAllTasks = function(callback) {
    db.get()
        .collection('userTasks')
        .find()
        .toArray (
            function (err, docs) {
                callback(err, docs)
            }
        )
}

exports.deleteById = function (itemId, callback) {
    db.get()
        .collection('userTasks')
        .deleteOne({id: itemId},
        function(err, result){
            callback(err, result);
        })
}

exports.putNewTask = function(newData, callback) {
    db.get().collection('userTasks').insert(newData, function(err, result){
        callback(err, result);
    })
}


exports.deleteAllTasks = function(callback){
     db.get().collection('userTasks').remove({},
        function(err, result){
            callback(err, result);
        });
}


exports.updateTask = function(itemId, newData, callback) {
    db.get().collection('userTasks')
        .updateOne(
            {id: itemId}, //условие которое находит элемент
            newData, //объект с данными, которые хотим обновить
            function(err, result){
                callback(err, result);
            }
    );
}
