import {URL} from '../../constants.js';

const COLUMNS = [
    {id: 0, name: 'Todo'},
    {id: 1, name: 'In progress'},
    {id: 2, name: 'Test'},
    {id: 3, name: 'Done'}
];

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
