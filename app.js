var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

myApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'BooksController'
        })
        .when('/all', {
            templateUrl: 'views/books.html',
            controller: 'BooksController'
        })

    .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'ContactController'
        })
        .when('/books/details/:id', {
            templateUrl: 'views/book_details.html',
            controller: 'BooksController'
        })
        .when('/books/category/:id', {
            templateUrl: 'views/genre.html',
            controller: 'BooksController'
        })
        .when('/login', {
            templateUrl: 'login.html',
            controller: 'UserController'
        })
        .when('/cart', {
            templateUrl: 'pages/cart.html',
            controller: 'CartController'
        })
        .when('/admin/newpost', {
            templateUrl: 'newpost.html',
            controller: 'AdminController'
        })
        .when('/admin/listpost', {
            templateUrl: 'listpost.html',
            controller: 'AdminController'
        })
        .when('/search', {
            templateUrl: 'pages/search.html',
            controller: 'AdminController'
        })
        .otherwise({ redirectTo: '/' });
});


// $.noConflict();
// jQuery(document).ready(function() {
//     jQuery(".uploadImg").on("click", function() {
//         jQuery(".inputImg").click();

//     });
// })