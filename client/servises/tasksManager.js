class TasksManager {
    constructor($http){
        console.log('TasksManager');
        this.$http = $http;
        // $http.get('/tasks').then(obj => this.data = obj.data);
    }

    getData() {
        return this.$http.get('/tasks');
        // $http.get('/tasks').then(obj => this.data = obj.data);
        // console.log($http);
        // this.$http.get('/tasks').success((data) => this.data = data);
    }

    changeStatus(item, direction) {  //true - двигать вправо //false - двигать влево
        direction ? item.status++ : item.status--;
        item.date = Date.now();
        let url = "/tasks/" + item._id;
        return this.$http.put(url, JSON.stringify(item))
    }
    
    deleteItem (item) {  
        let url = "/tasks/" + item._id;
        return this.$http.delete(url);
    }
    
    deleteAllItems() { 
        return this.$http.delete('/tasks');
    }
};

TasksManager.$inject = ['$http'];

export default TasksManager;
