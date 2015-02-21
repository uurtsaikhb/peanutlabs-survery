app.controller('CreateSurveyCtrl', ['$scope','surveyService', function($scope, surveyService) {
    var questionModel, newQuestionType = -1, orderBy;

    $scope.types = surveyService.getTypes();

    $scope.adding_question = false;
    $scope.showing_type = false;
    
    $scope.questions = surveyService.getQuestions();
    
    questionModel = surveyService.getQuestionModel();

    $scope.newQuestion = questionModel.create();

    $scope.addQuestion = function(type) {
        surveyService.addQuestion($scope.newQuestion);
        $scope.newQuestion = questionModel.create();
        $scope.newQuestion.answers = [];
        $scope.adding_question = false;
        $scope.showing_type = false;
    };

    $scope.setNewQuestionType = function(type) {
        $scope.newQuestion.type = type;
        $scope.adding_question = true;
    };

    $scope.setAnswer = function(index, answer) {
        $scope.newQuestion.answers[index] = answer;
    };

    $scope.addAnswer = function() {
        $scope.newQuestion.answers.push("Answer " + ($scope.newQuestion.answers.length + 1));
    };
}]);

app.controller('TakeSurveyCtrl', ['$scope', 'surveyService', '$location', function($scope, surveyService, $location) {
    surveyService.resetResult();
    $scope.questions = surveyService.getQuestions();
    
    $scope.completeSurvey = function(){
        $location.path( "/resultSurvey" );
    };
}]);

app.controller('ResultSurvey', ['$scope', 'surveyService', '$location', function($scope, surveyService, $location) {
    $scope.results = surveyService.getResults();
}]);


app.controller('NavbarController', function($scope, $location) {
    $scope.getClass = function(path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        }
        else {
            return false;
        }
    }
});
