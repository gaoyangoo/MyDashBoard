var myApp=angular.module("Daniella",["ui.router"]);

myApp.controller("test",function($scope){
    $scope.tag={
        tagName:"周大福",
        tagValue:20
    }
});
myApp.controller("test1",function($scope){

    $scope.isSelectAll=false;

    $scope.tags=[
        {tagName:"日商1", tagValue:30,selected:false},
        {tagName:"日商2", tagValue:30,selected:false},
        {tagName:"日商3", tagValue:30,selected:false},
        {tagName:"日商4", tagValue:30,selected:false},
        {tagName:"日商5", tagValue:30,selected:false},
        {tagName:"日商6", tagValue:30,selected:false},
        {tagName:"周大福(计价黄金)", tagValue:30,selected:false},

    ];
    $scope.state=[];
    for(var i=0;i< $scope.tags.length;i++){
        $scope.state[i]=false;
    }

    $scope.select=function(index){
        console.log($scope);
        console.log(this);
        $scope.state[index]=this.selected;
        console.log($scope.state);
    };

    $scope.selected=false;


});