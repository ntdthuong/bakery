myApp.controller('GenreController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    console.log('GenreController loaded...');
    var root = 'https://green-web-bookstore.herokuapp.com';
    $scope.getPost = function() {
        $http.get(root + '/api/genres').success(function(response) {
            $scope.genres = response;
        });
    }
}]);