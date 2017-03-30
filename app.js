// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);



// Routing
weatherApp.config(function($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    
});


// Controllers
weatherApp.controller('mainController', function($scope, $log) {
    
    $scope.city = '';
    
    $log.log($scope.city);
    
    $scope.logChanges = function() {
        $log.log($scope.city);
    }
      
});


weatherApp.controller('forecastController', function($scope) {
    
    $scope.temp = 51;
    
    $scope.location = 'Canarsie, Brooklyn 11236';
    $scope.time = 'Wednesday 8:00 PM';
    $scope.condition = 'Clear';  
    
    $scope.days = [
        {
            day: 'Mon',
            date: '123234',
            high: '70',
            low: '30',
            description: 'Partly Cloudy'
        },
        {
            day: 'Tue',
            date: '123234',
            high: '70',
            low: '30',
            description: 'Partly Cloudy'
        },
        {
            day: 'Wed',
            date: '123234',
            high: '70',
            low: '30',
            description: 'Partly Cloudy'
        },
        {
            day: 'Thurs',
            date: '123234',
            high: '70',
            low: '30',
            description: 'Partly Cloudy'
        },
    ]  
    
});