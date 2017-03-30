import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import fakeCoord from './constants';
import routing from './components/app/app.config.js';
import AppComponent from './components/app/app.component';
import NavbarComponent from './components/navbar/navbar.component';
import HomeComponent from './components/home/home.component';
import LogInComponent from './components/login/login.component';
import PhotoComponent from './components/photo/photo.component';
import TasksFormComponent from './components/tasksForm/tasksForm.component';
import LocalstorageManager from './servises/LocalstorageManager.js';
import ExifDataManager from './servises/exifDataManager.js';
import UserInfo from './servises/userInfo.js';
import MapManager from './servises/mapManager.js';


const app = angular.module('app', [uirouter]);

app.component('app', AppComponent);

app.component('navbar', NavbarComponent);

app.component('photo', PhotoComponent);

app.component('home', HomeComponent);

app.component('tasksForm', TasksFormComponent);

app.component('logIn', LogInComponent);

app.service('localstorageManager', LocalstorageManager);

app.service('userInfo', UserInfo);

app.factory('exifDataManager', () => {
    return new ExifDataManager();
});

app.factory('mapManager', () => {
    return new MapManager('#googleMap', fakeCoord);
});

app.config(routing);


//angular start
angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
});