class HomeController {

    moveLeft(task){
        if (task.status > 0) {
            this.parent.changeTaskPriority(task, false);
        }
        return;
    }

    moveRight(task) {
        if (task.status < this.columns.length - 1) {
            this.parent.changeTaskPriority(task, true);
        }
        return;
    }

    deleteItem(task){
        this.parent.deleteCurrentTask(task);
    }
    
}

export default HomeController;
