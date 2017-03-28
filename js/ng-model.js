var app = angular.module("testApp",[])
  .controller("user",function($scope){
    var user = {
      firstname: "Mahavir",
      lastname: "Munot"
    };
    $scope.user = user;
  });