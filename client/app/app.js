var app = angular.module('survey', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/createSurvey',
            {
                controller: 'CreateSurveyCtrl',
                templateUrl: '/app/partials/createSurvey.html'
            })
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