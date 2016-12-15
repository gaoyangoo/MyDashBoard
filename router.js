/**
 * Created by alex on 2016/12/4.
 */
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("index");
    $stateProvider
        .state("index", {
            url: "/index",
            templateUrl: "views/nav.html"
        })
        .state("index.home", {
            url: "/home",
            templateUrl: "views/home.html"
        });
});