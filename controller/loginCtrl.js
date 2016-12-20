/**
 * Created by gy on 2016/12/18.
 */
myApp.controller("loginCtrl", function ($scope, loginService) {
    $scope.user = {
        email: null,
        password: null
    };

    $scope.login = function () {
        loginService.login($scope.user.email, $scope.user.password);
        // console.log("welcome to system");
        // if ($scope.user.email === "110@gah" && $scope.user.password == "123") {
        //     document.cookie = "isLogin=" + true;
        //     $rootScope.isLogin=true;
        // } else{
        //     alert("请输入正确的用户名和密码");
        // }
    }
});