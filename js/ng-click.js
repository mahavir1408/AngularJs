var app = angular.module("ngclickApp",[])
  .controller("Technologies",function($scope){
    var technologies = [
      {
        name: "Java",
        likes: 0,
        dislikes: 0
      },
      {
        name: "Python",
        likes: 0,
        dislikes: 0
      },
      {
        name: "PHP",
        likes: 0,
        dislikes: 0
      }
    ];
    $scope.incrementLikes = function(technology){
      technology.likes++;
    };
    $scope.incrementDislikes = function(technology){
      technology.dislikes++;
    };
    $scope.technologies = technologies;
  });