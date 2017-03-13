const db = require('../db.js');

exports.getAllTasks = function(user, callback) {
    db.get()
        .collection(user)
        .find()
        .toArray (
            function (err, docs) {
                callback(err, docs)
            }
        )
}

exports.deleteById = function (user, itemId, callback) {
    db.get()
        .collection(user)
        .deleteOne({id: itemId},
        function(err, result){
            callback(err, result);
        })
}

exports.putNewTask = function(user, newData, callback) {
    db.get().collection(user).insert(newData, function(err, result){
        callback(err, result);
    })
}


exports.deleteAllTasks = function(user, callback){
     db.get().collection(user).remove({},
        function(err, result){
            callback(err, result);
        });
}


exports.updateTask = function(user, itemId, newData, callback) {
    db.get().collection(user)
        .updateOne(
            {id: itemId}, //условие которое находит элемент
            newData, //объект с данными, которые хотим обновить
            function(err, result){
                callback(err, result);
            }
    );
}
