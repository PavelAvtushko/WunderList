class tasksFormController {
    constructor($location) {
        this.description;
        this.title;
        this.columnID = 0;
        this.$location = $location;
    }
 
    sendData() {
        let newData = {
            "name": this.title,
            "status": this.columnID || "0",
            "description": this.description,
            "lastModifyDate": Date.now(),
            "id": Date.now()
        };

        this.parent.sendNewData(newData);
        this.description = null;
        this.title = null;
        this.columnID = 0;
    }

    deleteTasks() {
        this.parent.deleteTasks();
        this.$location.path("/Home/Tasks");
    }

    isEmpty(){
        return this.parent.isEmpty();
    }
}

tasksFormController.$inject = ['$location'];

export default tasksFormController;
