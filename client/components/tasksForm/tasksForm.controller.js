const REDIRECTION_PATH = "/Home/Tasks";

class tasksFormController {
    constructor($location) {
        this.description;
        this.title;
        this.columnID = 0;
        this.$location = $location;
    }
 
    sendData() {
        this.parent.sendNewData(this.createData());
        this.reset();
    }

    createData(){
        return {
            "name": this.title,
            "status": this.columnID || "0",
            "description": this.description,
            "lastModifyDate": Date.now(),
            "id": Date.now()
        };
    }

    reset() {
        this.description = null;
        this.title = null;
        this.columnID = 0;
    }

    deleteTasks() {
        this.parent.deleteTasks();
        this.$location.path(REDIRECTION_PATH);
    }

    isEmpty(){
        return this.parent.isEmpty();
    }
}

tasksFormController.$inject = ['$location'];

export default tasksFormController;
