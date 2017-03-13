import {URL} from '../../constants.js';

class LogInController {
    constructor($http, $location, userInfo) {
        this.$location=$location;
        this.$http=$http;
        this.userInfo = userInfo;
        // console.log('LogInController...')
    }
    
    submit(user){
        if (!user) {
            return;
        }
        this.$http.post(URL, {userName: user}).then((data) => {
            // console.log('userName...' + data.data.name);
            this.userInfo.name = data.data.name;
            this.$location.path("/Home/Tasks");
        });
        
    }
    
}

LogInController.$inject = ['$http', '$location', 'userInfo'];

export default LogInController;