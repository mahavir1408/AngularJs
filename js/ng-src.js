var app = angular
  .module("myApp",[])
  .controller("country",function($scope){
    var country = {
      name: "India",
      capital: "Delhi",
      Image: "images/in.png"
    };
    $scope.country = country;
  });