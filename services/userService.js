/**
 * Created by gy on 2016/12/20.
 */
myApp.factory("userService",function(){
    var currentUser={email:"1464911422@qq.com",password:"alex",degree:{id:1}};
    var users=[
        {name:"zeus",birth:1432075948125 ,salary:63000,degree:"master"},
        {name:"alex",birth:1432075948123 ,salary:3000,degree:"master"},
        {name:"Daniella",birth:1432075948123 ,salary:139000,degree:"bachelor"},
        {name:"John",birth:1432075948123 ,salary:183000,degree:"phd"},
        {name:"Jane",birth:"2015-05-20T03:56:16.887Z",salary:413000,degree:"professor"},
        {name:"Sam",birth:"2015-05-20T03:56:16.887Z",salary:123000,degree:"master"},
        {name:"Luis",birth:"2015-05-20T03:56:16.887Z",salary:121000,degree:"bachelor"},
        {name:"alpha",birth:"2015-05-20T03:56:16.887Z",salary:2000,degree:"undergraduate"}
    ];
    return {
        getCurrentUser:function(){
            return currentUser;
        },
        getUsers:function(){
            return users;
        }
    }
});