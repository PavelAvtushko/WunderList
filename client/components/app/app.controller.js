import {URL, COLUMNS} from '../../constants.js';

class AppController {
    constructor($http, $location, localstorageManager, userInfo) {
        if (!userInfo.name) {
            $location.path("/");
        };
        this.columns = COLUMNS;
        this.userName = userInfo.name || 'none';
        this.data = [];
        $http.get(URL + '?user=' + userInfo.name).then(obj => {
            this.data = obj.data;
            localstorageManager.setObject('wunderList', obj.data);
        });
       // console.log('AppController...');
    }
}

AppController.$inject = ['$http', '$location', 'localstorageManager', 'userInfo'];

export default AppController;
