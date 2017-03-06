import {URL} from '../../constants.js';

class HomeController {
    constructor($http) {
        this.$http = $http;
        this.columns;
        this.data;
        console.log('HomeController...');
    }

    _moveTask(task, direction){
        direction ? task.status++ : task.status--;
        task.lastModifyDate = Date.now();
        this.$http.put(URL + task.id, task)
            .then(obj => console.log(obj.status));
        return;
    }

    moveLeft(task){
        if (task.status > 0) {
            this._moveTask(task, false);
        }
        return;
    }

    moveRight(task) {
        if (task.status < this.columns.length - 1) {
            this._moveTask(task, true);
        }
        return;
    }

    deleteItem(task){
        this.$http.delete(URL + task.id)
            .then(obj => {
                let index = this.data.findIndex(item => item.id === task.id);
                this.data.splice(index, 1);
                console.log(obj.status);
        });
        return;
    }
};

HomeController.$inject = ['$http'];

export default HomeController;
