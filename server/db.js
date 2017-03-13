const MongoClient = require('mongodb').MongoClient;

//a variable, containts the database connection
let state = {
    db: null
};

//checks if the database connection exists
//if not, the method creates a new connection an writes it to state.db
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
