var app = angular.module("filterApp", [])
  .controller("Employees",function($scope){
    var employees = [
      {name:"Ben",dob: new Date("November 23, 1980"), gender: "Male", salary: 55000.788},
      {name:"Sara",dob: new Date("May 05, 1990"), gender: "Female", salary: 75000.788},
      {name:"Mark",dob: new Date("January 14, 1980"), gender: "Male", salary: 5000.788},
      {name:"Kurt",dob: new Date("August 08, 1980"), gender: "Male", salary: 5.788},
      {name:"Rahul",dob: new Date("April 22, 1980"), gender: "Male", salary: 95000.788}
    ];    
    $scope.employees = employees;
    $scope.sortColumn = "name";
  });