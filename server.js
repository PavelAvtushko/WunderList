
const express = require ('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname));

let db;

// app.use(express.static(__dirname + '/app'))
// app.get('/Home', function(req, res) {
//     //убрать кэширование файла браузером
//     // res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
//     // res.header('Pragma', 'no-cache');
//     res.sendFile(path.join(__dirname + '/send-pages/index1.html'));
// });


//возвращает коллекцию из базы данных при загрузке приложения
app.get('/tasks', function(req, res) {
    db.collection('listOfTasks').find().toArray(function(err, docs){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        // console.log(docs);
        res.send(docs);
    });
});


//принимает idэлемента  и записывает его смещение в базу
app.put('/tasks/:id', function(req, res) {
    // console.log('request ok' + req.params.id);
    db.collection('listOfTasks')
        .updateOne(
            { _id: ObjectID(req.params.id)}, //условие которое находит элемент
            { status: req.body.status,
              name: req.body.name,
              date: req.body.date,
              description:  req.body.description
            }, //объект с данными, которые хотим обновить
            function(err, result){
                if (err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.sendStatus(200);
            });
});



//принимает idэлемента  и удаляет его из базы
app.delete('/tasks/:id', function(req, res) {
    db.collection('listOfTasks')
        .deleteOne({ _id: ObjectID(req.params.id)},
            function(err, result){
                if (err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.sendStatus(200);
            });
    // console.log('request ok' + req.params.id);
});



//удаляет все записи из базы данных
app.delete('/tasks', function(req, res) {
    res.sendStatus(collectionDelete());
});


//функция очищает всю коллекцию данных
function collectionDelete() {
    let responseStatus = 200;
    db.collection('listOfTasks', function(err, collection) {
        if (err) {
            console.log(err);
            responseStatus = 500;
        }
        collection.remove(function(err, collection){
            if (err) {
                console.log(err);
                responseStatus = 500;
            }
            responseStatus = 200;
        });
    });
    return responseStatus;
};


// app.get('/main/:id', function(req, res) {
//     db.collection('listOfTasks').findOne(
//         {_id: ObjectID(req.params.id)}, function(err, doc){
//         if (err) {
//             console.log(err);
//             res.sendStatus(500);
//             return;
//         }
//         res.json(doc);
//     });
// });




//принимает новую запись в базу данных
app.put('/tasks', function(req, res) {
    db.collection('listOfTasks').insert(req.body, function(err, result){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        //возвращаем новый объект с установленным id
        return res.send(result.ops[0]);
    });

});



//подключается в базе данных и запускает сервер
MongoClient.connect('mongodb://localhost:27017/myToDo', function(err, dataBase){
    if(err) {
        return console.log(err);
    }
    db = dataBase;
    app.listen(8080, function(){
        console.log('connection...');
    })
});