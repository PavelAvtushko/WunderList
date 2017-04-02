import {COLUMNS} from './app.constants.js';

class AppController {
    constructor( requestsManager, userInfo, $location, localstorageManager ) {
        if (!userInfo.name) {
            $location.path("/");
        }
        this.columns = COLUMNS;
        this.userName = userInfo.name;
        this.data = [];
        this.requestsManager = requestsManager;
        this.localstorageManager = localstorageManager;
        this.actualStatus = false;
        this.getData();
    }

    getData() {
        this.requestsManager.getData(this.userName)
            .then( obj => {
                this.data = obj.data;
                this.actualStatus = true;
                this.localstorageManager.setObject(this.userName, this.data);
            });
    }

    changeTaskPriority(task, direction){
        direction ? task.status++ : task.status--;
        task.lastModifyDate = Date.now();
        this.localstorageManager.setObject(this.userName, this.data);
        this.requestsManager.changeTaskPriority(task, this.userName)
            .catch( () => {
                this.actualStatus = false;
                this.updateTasksOnTheServerSide();
            });
    }

    deleteCurrentTask(task){
        let index = this.data.findIndex(item => item.id === task.id);
        this.data.splice(index, 1);
        this.localstorageManager.setObject(this.userName, this.data);
        this.requestsManager.deleteCurrentTask(task, this.userName)
            .catch( () => {
                this.actualStatus = false;
                this.updateTasksOnTheServerSide();
            });
    }

    sendNewData(newData) {
        this.data.push(newData);
        this.localstorageManager.setObject(this.userName, this.data);
        this.requestsManager.sendNewData(newData, this.userName)
            .catch( () => {
                this.actualStatus = false;
                this.updateTasksOnTheServerSide();
            });   
    }

    deleteTasks() {
        this.data.length = 0;
        this.localstorageManager.clear(this.userName);
        this.requestsManager.deleteTasks(this.userName)
            .catch( () => {
                this.actualStatus = false;
                this.updateTasksOnTheServerSide();
            });  
    }

    isEmpty(){
        return !this.data.length;
    }

    updateTasksOnTheServerSide() {
        if (!this.actualStatus) {
            this.requestsManager
                .updateTasksArray(this.data, this.userName, this.actualStatus);
        }
        
    }
}

AppController.$inject = ['requestsManager', 'userInfo', '$location', 'localstorageManager'];

export default AppController;
