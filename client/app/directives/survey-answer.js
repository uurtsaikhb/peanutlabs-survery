app.directive('surveyAnswer', function() {
   return {
       restrict: 'E',
       scope : {
            question : "="  
       },
       controller : ['$scope', 'surveyService', function($scope, surveyService){
           $scope.result = {
               questionTitle : $scope.question.title,
               questionType : $scope.question.type,
               answers : []
           };
           
           surveyService.addOrUpdateResult($scope.result);
           
           $scope.getContentUrl = function() {
                var htmlName = surveyService.getHtmlUrlForType($scope.question.type);
                return 'app/partials/directive/'+htmlName;
           };
           
           $scope.giveAnswer = function(answer){
               $scope.result.answers[0] = answer;
           };
           
           $scope.giveAnswerCheckbox = function(answer){
                var index = $scope.result.answers.indexOf(answer);
                if(index > -1){
                    $scope.result.answers.splice(index, 1);
                }else{
                    $scope.result.answers.push(answer);
                }
                surveyService.addOrUpdateResult($scope.result);
           };
       }],
       template: '<div ng-include="getContentUrl()"></div>'
   }
});