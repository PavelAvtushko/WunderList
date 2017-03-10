import {URL} from '../../constants.js';

class tasksFormController {
    constructor($http, $location, $window, localstorageManager) {
        console.log('tasksFormController...');
        this.description;
        this.title;
        this.data;
        this.columnID;
        this.$http = $http;
        this.$location=$location;
        this.localstorage = localstorageManager;
    }

    sendData() {
        // debugger;

        let newData = {
            "name": this.title,
            "status": this.columnID || "0",
            "description": this.description,
            "lastModifyDate": Date.now(),
            "id": Date.now()
        };

        this.$http.put('/tasks', newData).then(obj => {
            this.data.push(obj.data);
        });

        event.preventDefault();
    }

    deleteTasks() {
        this.$http.delete(URL)
            .then(res => {
                this.data.length = 0;
            });
        this.$location.path("#/Home");
    }

    // select(el) {
    //     console.log(el)
    //     // if (el.id === 0) {
    //     //     return true;
    //     // }
    //     return false;
    // }
}

tasksFormController.$inject = ['$http', '$location', '$window' , 'localstorageManager'];

export default tasksFormController;
