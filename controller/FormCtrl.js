/**
 * Created by gy on 2016/12/20.
 */
myApp.controller("FormCtrl",function($scope,$timeout,userService){
    $scope.user = userService.getCurrentUser();
    $scope.degrees=[
        {id:1,name:"master"},
        {id:2,name:"phd"},
        {id:3,name:"professor"}
    ];
    $scope.removePassword=function(){
        $scope.user.password=null;
    };
    $timeout(function(){
        $scope.$watch("watchedValue",function(){
            console.log("data changed !");
        });
    },2000);


});