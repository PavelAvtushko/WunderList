const db = require('../db.js');

exports.getAllTasks = function(callback) {
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


exports.deleteAllTasks = function(callback){
     db.get().collection('listOfTasks').remove({},
        function(err, result){
            callback(err, result);
        });
}


exports.updateTask = function(itemId, newData, callback) {
    db.get().collection('listOfTasks')
        .updateOne(
            {id: itemId}, //условие которое находит элемент
            newData, //объект с данными, которые хотим обновить
            function(err, result){
                callback(err, result);
            }
    );
}
