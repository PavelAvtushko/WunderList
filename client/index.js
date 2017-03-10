import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';


import routing from './components/app/app.config.js';
import AppComponent from './components/app/app.component';
import NavbarComponent from './components/navbar/navbar.component';
import HomeComponent from './components/home/home.component';
import LogInComponent from './components/login/login.component';
import TasksFormComponent from './components/tasksForm/tasksForm.component';
import LocalstorageManager from './servises/LocalstorageManager.js';


const app = angular.module('app', [uirouter]);

app.component('app', AppComponent);

app.component('navbar', NavbarComponent);

app.component('home', HomeComponent);

app.component('tasksForm', TasksFormComponent);

app.component('logIn', LogInComponent);

app.service('localstorageManager', LocalstorageManager);

app.config(routing);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
});