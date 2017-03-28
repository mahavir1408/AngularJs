var app = angular.module("repeatApp",[])
  .controller("Users",function($scope){
    var users = [
    {firstname: "Mahavir",lastname: "Munot"},
    {firstname: "Rahul",lastname: "Singh"},
    {firstname: "Chhaya",lastname: "Dhone"}
    ];
    $scope.users = users;
  });