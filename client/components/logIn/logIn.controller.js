class LogInController {
    constructor(requestsManager, $location, userInfo) {
        this.$location = $location;
        this.requestsManager = requestsManager;
        this.userInfo = userInfo;
    }
    
    submit(user){
        if (!user) { 
            return;
        }
        this.requestsManager.setUser({userName: user})
            .then((data) => {
            this.userInfo.name = data.data.name;
            this.$location.path("/Home/Tasks");
        });
    }
}

LogInController.$inject = ['requestsManager', '$location', 'userInfo'];

export default LogInController;
