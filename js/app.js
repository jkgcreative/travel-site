var app = angular.module('app', ['ui.router','ui.validate', 'ngMessages', 'rzModule', 'ui.bootstrap']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
    .when('/reservenow', '/reservenow/van')
    .otherwise('/home');
    
    $stateProvider
    .state('home', {
        url: "/home",
        templateUrl: "views/home.html"
    })
    .state('destination', {
        controller: "destiController",
        url: "/destination",
        templateUrl: "views/destination.html"
    })
    .state('destinationArticle', {
        controller: "destiController",
        url: "/destinationArticle/:id",
        templateUrl: "views/destination-article.html"
    })
    .state('seePackage', {
        controller: "pkgController",
        url: "/seePackage/:id",
        templateUrl: "views/see-package-page.html"
    })
    .state('package', {
        controller: "pkgController",
        url: "/package",
        templateUrl: "views/package-page.html"
    })
    .state('gallery', {
        url: "/gallery",
        templateUrl: "views/gallery-page.html"
    })
    .state('contact', {
        controller: "mainController",
        url: "/contact",
        templateUrl: "views/contact-page.html"
    })
    .state('reservenow', {
        url: "/reservenow",
        templateUrl: "views/reservenow-page.html"
    })
    .state('reservenow.van', {
        url: "/van",
        templateUrl: "views/van.html"
    })
    .state('reservenow.hotel', {
        url: "/hotel",
        templateUrl: "views/hotel.html"
    })
    .state('reservenow.tour', {
        url: "/tour",
        templateUrl: "views/tour.html"
    })
    .state('reservenow.flight', {
        url: "/flight",
        templateUrl: "views/flight.html"
    });    
}]);