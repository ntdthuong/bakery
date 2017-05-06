// app.controller('HomeController', function($scope, $http) {
//     $scope.message = 'Hello from HomeController';
//     $http.get("https://green-web-bookstore.herokuapp.com/api/books").then(function(response) {
//         $scope.books = response.data;
//     });
//     $http.get("http://green-web-bookstore.herokuapp.com/api/genres").then(function(response) {
//         $scope.genres = response.data;
//     });
// });
var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    console.log('BooksController loaded...');
    var root = 'https://green-web-bookstore.herokuapp.com';

    $scope.getBooks = function() {
        $http.get(root + '/api/books').success(function(response) {
            $scope.books = response;
        });
    }

    $scope.getBook = function() {
        var id = $routeParams.id;
        $http.get(root + '/api/books/' + id).success(function(response) {
            $scope.book = response;
        });
    }

    $scope.getGenres = function() {
        $http.get(root + '/api/genres').success(function(response) {
            $scope.genres = response;
        });
    }
    $scope.getBookByGenre = function() {
        var id = $routeParams.id;
        $http.get(root + '/api/books/genre/' + id).success(function(response) {
            $scope.books = response;
        });
    }

    // cmt
    $scope.user = {
        'userName': 'Thương Đăng',
        'userAvatarUrl': 'http://3.bp.blogspot.com/_1Jw2fzSntT0/TZC7zd6pN6I/AAAAAAAABMY/x61e0ToHYOo/w1600/050.gif'
    }
    $scope.comment = {};
    $scope.addComment = function(post) {
            $scope.comment.date = Date.now();
            $scope.comment.userName = $scope.user.userName;
            $scope.comment.userAvatarUrl = $scope.user.userAvatarUrl;
            post.comments.push($scope.comment);
            var req = {
                method: 'PUT',
                url: bookservice.getBook + $routeParams.itemId,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: post
            }
            $http(req).then(function() {
                    console.log('success')
                },

                function() {
                    console.log('error')
                });
            // $http.put(bookservice.getBook + $routeParams.itemId, $scope.post).success(function(response) {
            //     console.log('success')
            // });

            console.log(post);

        }
        // cmt

    // rating
    $scope.max = 5;
    $scope.isReadonly = false;
    $scope.hoveringOver = function(value) {
        $scope.overStar = value;
    };
    $scope.ratingStates = [
        { stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty' }
    ];
    // end rating



}]);


// app.controller('CategogiesController', function($scope, $http) {
//     $scope.message = 'Hello from CategogiesController';
// });
myApp.controller('SearchController', function($scope, $http) {
    $scope.message = 'Hello from SearchController';
});
myApp.controller('ContactController', function($scope, $http) {
    $scope.message = 'Hello from ContactController';
});

myApp.controller('CartController', function($scope, $http) {
    $scope.message = 'Hello from CartController';
});