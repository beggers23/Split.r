var app = angular.module("Splitr", []);
app.controller('MainController', ['$scope', function($scope){

  $scope.firstmin=0;
  $scope.firstsec=0;
  $scope.firsttenth=0;

  $scope.secondmin=0;
  $scope.secondsec=0;
  $scope.secondtenth=0


  $scope.finaltime = function(){
    $scope.finalmin = Math.abs($scope.firstmin - $scope.secondmin);
    $scope.finalsec = Math.abs($scope.firstsec - $scope.secondsec);
    $scope.finaltenth = Math.abs($scope.firsttenth - $scope.secondtenth);

    $scope.final = $scope.finalmin+':'+$scope.finalsec+'.'+$scope.finaltenth;

    return $scope.final;
  }

}])
