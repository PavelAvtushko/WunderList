
// (function() {
app.directive('inputForm', function() {
    return {
        templateUrl: './client/form/form.html',
        controller: sendNewDataToServer,
    }
});

function sendNewDataToServer($scope, $http) {
    // $scope.update = function() {
    //         console.log($scope);
    //     };

    $scope.sendData = function() {
        let newData = {
            "name": $scope.title,
            "status": $scope.columnID || "0",
            "description": $scope.description,
            "date": Date.now()
        };

        // $scope.mainCtrl.data.push(newData);

        $http.put("/tasks", newData).success(data => {
            // console.log("response status: " + data);
            $scope.mainCtrl.data.push(data);
        });
        event.preventDefault(); //предотвращает перезагрузку формы
    }
}





app.service('findIndex', function () {
        this.sendData = function(array, newData) {
            return ;
    };
});

// })();