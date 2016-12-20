/**
 * Created by gy on 2016/12/20.
 */
myApp.factory("loginService",function($rootScope){
    return {
        login:function(email,password){
            console.log("welcome to my system");
            if(email==="1464911422@qq.com" && password=="123456789"){
                document.cookie="isLogin="+true;
                $rootScope.isLogin=true;
            }
        }
    }
});