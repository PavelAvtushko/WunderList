import {URL} from '../../constants.js';

const COLUMNS = [
    {id: 0, name: 'Todo'},
    {id: 1, name: 'In progress'},
    {id: 2, name: 'Test'},
    {id: 3, name: 'Done'}
];

class AppController {
    constructor($http) {
        this.columns = COLUMNS;
        this.data = [];
        $http.get(URL).then(obj => this.data = obj.data);
        console.log('AppController...');
    }
}


AppController.$inject = ['$http'];

export default AppController;
