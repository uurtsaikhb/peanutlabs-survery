var app = angular.module('survey', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/createSurvey',
            {
                controller: 'CreateSurveyCtrl',
                templateUrl: '/app/partials/createSurvey.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/takeSurvey',
            {
                controller: 'TakeSurveyCtrl',
                templateUrl: '/app/partials/takeSurvey.html'
            })
        .when('/resultSurvey',
            {
                controller: 'ResultSurvey',
                templateUrl: '/app/partials/result.html'
            })
        .otherwise({ redirectTo: '/createSurvey' });
});