import {URL} from '../../constants.js';

const COLUMNS = [
    {id: 0, name: 'Todo'},
    {id: 1, name: 'In progress'},
    {id: 2, name: 'Test'},
    {id: 3, name: 'Done'}
];

class AppController {
    constructor($http, localstorageManager) {
        this.columns = COLUMNS;
        this.data = [];
        $http.get(URL).then(obj => {
            this.data = obj.data;
            localstorageManager.setObject('wunderList', obj.data);
        });
        console.log('AppController...');
    }
}

AppController.$inject = ['$http', 'localstorageManager'];

export default AppController;
