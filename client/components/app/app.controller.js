import {COLUMNS} from './app.constants.js';

class AppController {
    constructor(requestsManager, userInfo, $location ) {
        if (!userInfo.name) {
            $location.path("/");
        }
        this.columns = COLUMNS;
        this.userName = userInfo.name || 'none';
        this.data = [];
        this.requestsManager = requestsManager;
        this.getData(this.userName);
    }

    isEmpty(){
        return !this.data.length;
    }

    getData(user) {
        this.requestsManager.getData(user, this.userName)
            .then( obj => {this.data = obj.data;});
    }

    changeTaskPriority(task, direction){
        direction ? task.status++ : task.status--;
        task.lastModifyDate = Date.now();
        this.requestsManager.changeTaskPriority(task, this.userName)
            .then( obj => console.log(obj.status));
        return;
    }

    deleteCurrentTask(task){
        this.requestsManager.deleteCurrentTask(task, this.userName)
            .then(obj => {
                let index = this.data.findIndex(item => item.id === task.id);
                this.data.splice(index, 1);
                console.log(obj.status);
        });
        return;
    }

    sendNewData(newData) {
        this.requestsManager.sendNewData(newData, this.userName)
        .then(obj => {
            this.data.push(obj.data);
        });
    }

    deleteTasks() {
        this.requestsManager.deleteTasks(this.userName)
        .then(() => {
            this.data.length = 0;
        });
    }
}

AppController.$inject = ['requestsManager', 'userInfo', '$location'];

export default AppController;
