/**
 * Created by alex on 2016/12/4.
 */
myApp.directive("clickLabel",function(){
    return {
        restrict:'A',
        scope:{
            selected:'=',
            labelName:'@'
        },
        replace:true, //if set it true ,it will tell browser to replace the DOM with template
        templateUrl:'./directive/template/clickLabel.html',//compare to the path of index.html
        link:function(scope,element){
            scope.changeState=function() {
                if (scope.selected) {
                    element.removeClass("selected");
                    scope.selected = false;
                } else {
                    element.addClass("selected");
                    scope.selected = true;
                }
            };

            scope.$watch("selected",function(){
                if(scope.selected){
                    element.addClass("selected");
                }else{
                    element.removeClass("selected");
                }
            });
        },
        controller:function($scope){
            $scope.selected;
        }
    }
});

