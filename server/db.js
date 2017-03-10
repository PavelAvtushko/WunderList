const MongoClient = require('mongodb').MongoClient;

//переменная в которой хранятся подключения
let state = {
    db: null
};

//при вызове метода проверяется есть ли уже подключение
//если его нет, то оно создается и записывается в state.db
exports.connect = function (url, callback) {
    if (state.db) {
        return callback();
    };
    
    MongoClient.connect(url, function(err, db) {
        if (err) {
            return callback(err);
        }
        state.db = db;
        callback();
    });
};

exports.get = function () {
    return state.db;
};
