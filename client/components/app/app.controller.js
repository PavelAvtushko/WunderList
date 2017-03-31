import {URL, COLUMNS} from '../../constants.js';

class AppController {
    constructor(serverManager, userInfo, $location ) {
        if (!userInfo.name) {
            $location.path("/");
        }
        this.columns = COLUMNS;
        this.userName = userInfo.name || 'none';
        this.data = [];
        this.serverManager = serverManager;
        this.getData(this.userName);
    }


    isEmpty(){
        return !this.data.length;
    }

    getData(user) {
        this.serverManager.getData(user, this.userName)
            .then( obj => { this.data = obj.data;});
    }

    changeTaskPriority(task, direction){
        direction ? task.status++ : task.status--;
        task.lastModifyDate = Date.now();
        this.serverManager.changeTaskPriority(task, this.userName)
            .then( obj => console.log(obj.status));
        return;
    }

    deleteCurrentTask(task){
        this.serverManager.deleteCurrentTask(task, this.userName)
            .then(obj => {
                let index = this.data.findIndex(item => item.id === task.id);
                this.data.splice(index, 1);
                console.log(obj.status);
        });
        return;
    }

    sendNewData(newData) {
        this.serverManager.sendNewData(newData, this.userName)
        .then(obj => {
            this.data.push(obj.data);
        });
    }

    deleteTasks() {
        this.serverManager.deleteTasks(this.userName)
        .then(() => {
            this.data.length = 0;
        });
    }
}

AppController.$inject = ['serverManager', 'userInfo', '$location'];

export default AppController;
