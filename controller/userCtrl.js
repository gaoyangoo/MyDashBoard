myApp.controller("userCtrl",function($scope,$http){
	$scope.user={
		name:"",
		age:""
	};

	$http({
	  method: 'GET',
	  url: 'http://localhost:8080/test/User/Author'
	}).then(function successCallback(response) {

	    console.log(response);
		$scope.user = response;
	  }, function errorCallback(response) {

	  });

	$http({
	  method: 'POST',
	  data:{
		  "userName": "test",
		  "age": "220",
		  "age1": "22",
		  "age2": "22",
		  "test":"4564"
		},
	  url: 'http://localhost:8080/test/User/createUser'
	}).then(function successCallback(response) {
	    console.log(response);
	  }, function errorCallback(response) {

	  });


});