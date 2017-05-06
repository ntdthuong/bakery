angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('RatingDemoCtrl', function ($scope) {
  $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;

 $scope.hoveringOver = function(value) {
    $scope.overStar = value;

 };

 $scope.ratingStates = [
  
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
  
  ];
});