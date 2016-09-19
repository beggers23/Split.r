var app = angular.module("Splitr", []);
app.controller('MainController', ['$scope', function($scope){

  $scope.firsttime = 0;
  $scope.secondtime= 0;

  $scope.firstsplit = 0;
  $scope.secondsplit = 0;


  $scope.finaltime = function(){
    

    $scope.final = $scope.finalmin+':'+$scope.finalsec+'.'+$scope.finaltenth;

    return $scope.final;
  }

}])
