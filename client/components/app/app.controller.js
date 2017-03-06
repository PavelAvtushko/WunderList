import {URL} from '../../constants.js';

const COLUMNS = [
    {id: 0, name: 'todo'},
    {id: 1, name: 'in progress'},
    {id: 2, name: 'test'},
    {id: 3, name: 'done'}
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
