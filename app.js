var myApp=angular.module("Daniella",["ui.router"]);

myApp.run(function($rootScope){
    $rootScope.isLogin=getCookie("isLogin");
    $rootScope.signOut=function(){
        console.log("bye-bye");
        $rootScope.isLogin=false;
        document.cookie="isLogin="+false;
    }
});
