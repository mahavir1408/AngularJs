var app = angular.module("nestedRepeatApp",[])
  .controller("Countries",function($scope){
    var countries = [
      {
        name: "India",
        cities: ["Pune", "Nasik", "Ahemadabad"]
      },
      {
        name: "USA",
        cities: ["New York City", "Boston", "Seattle"]
      },
      {
        name: "Australia",
        cities: ["Sydney", "Perth", "Adelaide"]
      },
      {
        name: "India",
        cities: ["Pune", "Pune", "Pune"]
      }
    ];
    $scope.countries = countries;
  });