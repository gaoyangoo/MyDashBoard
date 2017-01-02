/**
 * Created by alex on 2016/12/4.
 */
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state("/", {
            url: "/",
            templateUrl: "views/BootstrapPages/Gy-bootstrap.html"
        })
        .state("bootstrap",{
            url:"/bootStrap",
            templateUrl:"views/BootstrapPages/Gy-bootstrap.html"
        })
        .state("angular",{
            url:"/angular",
            templateUrl:"views/AngularPages/Gy-angular.html"
        })
        .state('springboot',{
            url:"/springboot",
            templateUrl:"views/SpringBootPages/Gy-springboot.html"
        })
        .state('echarts',{
            url:"/echarts",
            templateUrl:"views/Echarts/visualData.html"
        });

});