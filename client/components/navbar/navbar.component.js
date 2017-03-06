import template from './navbar.template.html';
import controller from './navbar.controller';
import './navbar.style.css';

let NavbarComponent = {
    template,
    controller,
    replace: true
};

export default NavbarComponent;




// import mainHTML from './header.html';


// function greeting() {
//     return {
//         restrict: 'E',
//         // scope: {
//         //   name: '='
//         // },
//         template: mainHTML
//     }
// }

// export default greeting;


// function MyCtrl($http, tasksData, itemsAction) {
//     console.log('MyCtrl call');
//     this.col =  tasksData.col;
//     this.data;
//     itemsAction.getData().success(data => this.data = data);
//     this.deleteItem = function(item){
//         // console.log(this.data);
//         itemsAction.deleteItem(item).success(data => {
//             this.data = this.data.filter(element => element._id !== item._id);
//             console.log(data);
//         });
//     };

//     this.moveLeft = function (item) {
//         if (item.status > 0) {
//             itemsAction.changeStatus(item, false).success(data => {
//                 console.log("response status:" + data);
//             });
//         }
//     };

//     this.moveRight = function (item) {
//         if (item.status < this.col.length - 1) {
//             itemsAction.changeStatus(item, true).success(data => {
//                 console.log("response status:" + data);
//             });
//          }
//     };
//     this.deleteALL = function(){
//         itemsAction.deleteAllItems()
//             .success(res => {
//                 this.data = [];
//             });
//     }
// };

// app.service('itemsAction', ['$http', function ($http) {
//     this.getData = function() {
//         return $http.get('/tasks');
//     };

//     this.changeStatus = function (item, direction) {  //true - двигать вправо //false - двигать влево
//         direction ? item.status++ : item.status--;
//         item.date = Date.now();
//         let url = "/tasks/" + item._id;
//         return $http.put(url, JSON.stringify(item))
//     };
    
//     this.deleteItem = function (item) {  
//         let url = "/tasks/" + item._id;
//         return $http.delete(url);
//     };
    
//     this.deleteAllItems = function () { 
//         return $http.delete('/tasks');
//     };

// }]);

// app.service('tasksData', ['$http', function ($http) {
//     this.col = [
//         {id:0, name: 'todo'},
//         {id:1, name: 'in progress'},
//         {id:2, name: 'test'},
//         {id:3, name: 'done'}
//     ];
// }]);

// app.controller("MyCtrl", ['$http', 'tasksData', 'itemsAction', MyCtrl]);