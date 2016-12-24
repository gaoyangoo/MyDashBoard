/**
 * Created by gy on 2016/12/20.
 */
myApp.controller("FormCtrl", function ($scope, $timeout, userService, randomColor) {
    $scope.user = userService.getCurrentUser();
    $scope.users=userService.getUsers();

    $scope.degrees = [
        {id: 1, name: "master"},
        {id: 2, name: "phd"},
        {id: 3, name: "professor"}
    ];
    $scope.fruits = [
        {id: 1, name: "peach", selected: false},
        {id: 2, name: "apple", selected: false},
        {id: 3, name: "orange", selected: false},
        {id: 4, name: "pear", selected: false},
        {id: 5, name: "grape", selected: true},
        {id: 6, name: "watermelon", selected: false}
    ];
    $scope.checkbox = {
        value: false,
        name: 'All',
        count: 0,
        maxCount: $scope.fruits.length
    };


    $scope.removePassword = function () {
        $scope.user.password = null;
    };

    $scope.color = randomColor.getColor($scope.fruits.length);

    $scope.$watch(function () {
            return JSON.stringify($scope.fruits);
        },
        function () {
            $scope.checkbox.count = 0;
            angular.forEach($scope.fruits, function (data) {
                if (data.selected == true) {
                    $scope.checkbox.count = $scope.checkbox.count + 1;
                }
            });
            if ($scope.checkbox.maxCount == $scope.checkbox.count) {
                $scope.checkbox.value = true;
            }
        });
    $scope.$watch('checkbox.value', function () {
        if ($scope.checkbox.value) {
            angular.forEach($scope.fruits, function (data) {
                data.selected = true;
                $scope.checkbox.name = "cancel";
            })
        } else {
            angular.forEach($scope.fruits, function (data) {
                data.selected = false;
                $scope.checkbox.name = "All";
            })
        }

    });

});