import {URL} from '../constants.js';

class requestsManager {
    constructor($http, $timeout) {
        this.$http = $http;
        this.$timeout = $timeout;
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

    setUser(data) {
        return  this.$http.post(URL, data);
    }

    updateTasksArray(data, user, actualStatus){
        let that = this;
        this.deleteTasks(user)
            .then(() => {
                const promises = [];
                for (let i = 0; i < data.length; ++i) {
                    promises.push(that.sendNewData(data[i], user));
                }
                Promise
                    .all(promises)
                    .then(() => {
                        console.log('statusChange');
                        actualStatus = true;
                    });
            })
            .catch(() => {
                that.$timeout( () => {
                    console.log('timeout');
                    that.updateTasksArray(data, user, actualStatus);
                }, 5000);
            });
    }
}

requestsManager.$inject = ['$http', '$timeout'];

export default requestsManager;
