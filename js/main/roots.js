var app = angular.module('startApp', [
    'ngRoute'
]);

/**
 * Configure the Routes  of the app
 */
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    // Home
        .when("/", { templateUrl: "partials/home.html", controller: "" })
        // Pages
        .when("/about", { templateUrl: "partials/about.html", controller: "" })
        .when("/services", { templateUrl: "partials/services.html", controller: "" })
        .when("/contact", { templateUrl: "partials/contact.html", controller: "" })
        // else 404
        .otherwise("/404", { templateUrl: "partials/404.html", controller: "" });
}]);