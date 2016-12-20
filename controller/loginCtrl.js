/**
 * Created by gy on 2016/12/18.
 */

var loginModule = angular.module("loginModule", []);

    loginModule.controller("loginCtrl", function ($scope) {
        $scope.user={
            email:null,
            password:null
        };
        // $scope.login=loginService.login($scope.user.email,$scope.user.password);
        $scope.login=function(){
            console.log("welcome to system");
            if($scope.user.email==="110@gah" && $scope.user.password=="123"){
                document.cookie="isLogin="+true;
                window.location.href="../index.html"
            }
        }
    });