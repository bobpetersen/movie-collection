const app = angular.module('MovieApp', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', function ($routeProvider) {
    console.log('Route provider loaded');

    $routeProvider
        .when('/', {
            redirectTo: '/'
        })
        .when('/genre', {
            templateUrl: 'views/genre.html',
            controller: 'GenreController as vm'
        })
        .when('/movie', {
            templateUrl: 'views/movie.html',
            controller: 'MovieController as vm'
        })
        .otherwise({
            template: '<h1>404</h1>'
        });
}]);
