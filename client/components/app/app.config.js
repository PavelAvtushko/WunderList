// import aboutHTML from '../about/about.template.html';

let routing = [
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state({
                name: 'Home.Tasks',
                url: '/Tasks',
                template: '<home columns = "$ctrl.columns" data = "$ctrl.data" user = "$ctrl.userName"></home>'
            })
            .state({
                name: 'Home',
                url: '/Home',
                template: '<app></app>'
            })
            .state({
                name: 'Home.AddNew',
                url: '/AddNew',
                template: '<tasks-form columns = "$ctrl.columns" data = "$ctrl.data" user = "$ctrl.userName"></tasks-form>'
            })
            .state({
                name: 'Home.Photo',
                url: '/Photo',
                template: '<photo></photo>'
            })
            .state({
                name: 'logIn',
                url: '/',
                template: '<log-In></log-In>'
    });
}];

export default routing;
