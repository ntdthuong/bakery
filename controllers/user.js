var myApp = angular.module('myApp');

myApp.controller('UserController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    console.log('UserController loaded...');
    var root = 'https://green-web-bookstore.herokuapp.com';

    $scope.getForm = function() {
        $http.get(root + '/api/books').success(function(response) {
            $scope.books = response;
        });
    }

}]);