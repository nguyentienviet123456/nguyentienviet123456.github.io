angular.module('helloWorldApp', [
    'ngRoute','apiHelper'
])
.config([
    '$routeProvider',
    function($routeProvider, apiHelper) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            });
    }
]);
