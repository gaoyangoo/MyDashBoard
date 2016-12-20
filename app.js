var myApp=angular.module("Daniella",["ui.router"]);

myApp.run(function($rootScope){
    $rootScope.isLogin=false;
    $rootScope.signOut=function(){
        console.log("bye-bye");
        $rootScope.isLogin=false;
        document.cookie="isLogin="+false;
    }
});
