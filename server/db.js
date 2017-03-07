const MongoClient = require('mongodb').MongoClient;

//переменная в которой хранятся подключения
let state = {
    db:null
};

//при вызове метода проверяется есть ли уже подключение
//если его нет, то оно создается и записывается в state.db
exports.connect = function (url, done) {
    if (state.db) {
        return done();
    };
    
    MongoClient.connect(url, function(err, db) {
        if (err) {
            return done(err);
        }
        state.db = db;
        done();
    });
};

exports.get = function () {
    return state.db;
};
