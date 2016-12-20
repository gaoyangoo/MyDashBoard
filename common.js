/**
 * Created by gy on 2016/12/20.
 */

function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

window.onload=function(){
    var isSignIn=getCookie("isLogin");
    console.log(isSignIn);
    if(!isSignIn){
        console.log("you did not sign in the system");
        window.location.href="views/login.html"
    }
};