/**
 * Created by alex on 2016/12/4.
 */
myApp.config(function($stateProvider,$urlRouterProvider){

})
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("nav");
    $stateProvider
        .state("nav", {
            url: "/nav",
            templateUrl: "views/nav.html"
        });
});