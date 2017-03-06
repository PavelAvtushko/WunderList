const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const tasksController = require('./server/controllers/tasksController');

let db = require('./server/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname));


//возвращает коллекцию из базы данных при загрузке приложения
app.get('/tasks', tasksController.all);

//принимает новую запись в базу данных
app.put('/tasks', tasksController.putNewTask);

//принимает id элемента  и удаляет его из базы
app.delete('/tasks/:id', tasksController.deleteById);

//удаляет всю коллекцию
app.delete('/tasks', tasksController.deleteById);


//принимает idэлемента  и записывает его смещение в базу
app.put('/tasks/:id', function(req, res) {
    // console.log('request ok' + req.params.id);
    db.get().collection('listOfTasks')
        .updateOne(
            {id: +req.params.id}, //условие которое находит элемент
            { status: req.body.status,
              name: req.body.name,
              lastModifyDate: Date.now(),
              id: req.body.id,
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


//подключается в базе данных и запускает сервер
db.connect('mongodb://localhost:27017/myToDo', function(err){
    if(err) {
        return console.log(err);
    }
    // db = dataBase;
    app.listen(8080, function(){
        console.log('connection...');
    })
});