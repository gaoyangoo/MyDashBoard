/**
 * Created by alex on 2016/12/4.
 */
myApp.directive("clickLabel", function () {
    return {
        restrict: "AE",
        transclude: true,
        scope:false,
        templateUrl: "directive/template/clickLabel.html",
    }
});
myApp.directive("toController", function () {
    return {
        restrict: "AE",
        transclude: true,
        scope:false,
        templateUrl: "directive/template/clickLabel.html",
        link: function (scope, element, attr) {
            //element.bind("mouseenter",function(){
            //    console.log(scope.tag.tagName);
            //});
            //console.log(scope);
            element.bind("click", function () {
                console.log(attr.name);
                console.log(scope.selected);
                if (!scope.selected) {
                    element.addClass("selected");
                    scope.selected = true;
                } else {
                    element.removeClass("selected");
                    scope.selected = false;
                }
            });
            //element.bind("mouseleave",function(){
            //    console.log(attr.name);
            //});

        }

    }

});