import aboutHTML from '../about/about.template.html';

let routing = [
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/Home');
        $stateProvider
            .state({
                name: 'Home',
                url: '/Home',
                template: '<home columns = "$ctrl.columns" data = "$ctrl.data"></home>'
            })
            .state({
                name: 'AddNew',
                url: '/AddNew',
                template: '<tasks-form columns = "$ctrl.columns" data = "$ctrl.data"></tasks-form>'
            })
            .state({
                name: 'About',
                url: '/About',
                template: aboutHTML
    });
}];

export default routing;
