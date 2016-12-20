/**
 * Created by gy on 2016/12/20.
 */
myApp.factory("userService",function(){
    var currentUser={email:"1464911422@qq.com",password:"alex",degree:{id:1}};
    return {
        getCurrentUser:function(){
            return currentUser;
        }
    }
});