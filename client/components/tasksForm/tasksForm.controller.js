import {URL} from '../../constants.js';

class tasksFormController {
    constructor($http, $location, $window, localstorageManager) {
        //console.log('tasksFormController...');
        this.description;
        this.title;
        this.data;
        this.columns;
        this.columnID = 0;
        this.$http = $http;
        this.$location = $location;
        this.localstorage = localstorageManager;
    }
 
    sendData(userName) {
        event.preventDefault();
        let newData = {
            "name": this.title,
            "status": this.columnID || "0",
            "description": this.description,
            "lastModifyDate": Date.now(),
            "id": Date.now()
        };

        this.$http.put(URL + '?user=' + this.user, newData).then(obj => {
            this.data.push(obj.data);
        });
        this.description = null;
        this.title = null;
        this.columnID = 0;
    }

    deleteTasks() {
        this.$http.delete(URL + '?user=' + this.user)
            .then(res => {
                this.data.length = 0;
            });
        this.$location.path("/Home/Tasks");
    }
}

tasksFormController.$inject = ['$http', '$location', '$window' , 'localstorageManager'];

export default tasksFormController;
