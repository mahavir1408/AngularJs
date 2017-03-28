var app = angular
  .module("myApp",[])
  .controller("employee",function($scope){
    var employee = {
      name:"John",
      age: "34",
      project: "Yahoo"
    };
    $scope.employee = employee;
  });