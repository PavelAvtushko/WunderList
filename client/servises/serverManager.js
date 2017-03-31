import {URL} from '../constants.js';

class serverManager {
    constructor($http) {
        this.$http = $http;
    }

    getData(user){
        return this.$http.get(URL + '?user=' + user);
    }

    changeTaskPriority(task, user){
        return this.$http.put(URL + task.id + '?user=' + user, task);
    }

    deleteCurrentTask(task, user){
        return this.$http.delete(URL + task.id + '?user=' + user);
    }

    sendNewData(data, user) {
        return this.$http.put(URL + '?user=' + user, data);
    }

    deleteTasks(user) {
        return this.$http.delete(URL + '?user=' + user);
    }

}

serverManager.$inject = ['$http'];

export default serverManager;
