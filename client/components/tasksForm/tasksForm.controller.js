import {URL} from '../../constants.js';

class tasksFormController {
    constructor($http) {
        console.log('tasksFormController...');
        this.description;
        this.title;
        this.data;
        this.columnID;
        this.$http = $http;
    }

    sendData() {
        // debugger;
        if (typeof this.title === "undefined" ||
            typeof this.description === "undefined") {
            return;
        }

        let newData = {
            "name": this.title,
            "status": this.columnID || "0",
            "description": this.description,
            "lastModifyDate": Date.now(),
            "id": Date.now()
        };

        this.$http.put(URL, newData).then(obj => {
            this.data.push(obj.data);
        });

        event.preventDefault();
    }

    deleteTasks() {
        this.$http.delete(URL)
            .then((res) => {
                this.data.length = 0;
            });
        document.location.href = "#/Home";
    }
}

tasksFormController.$inject = ['$http'];

export default tasksFormController;
