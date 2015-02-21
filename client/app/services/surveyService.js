//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('surveyService', function() {

    var  _q_type, _html_question_type, _results = [],
    questionProto, questionModel,
    _questions = [];
        // _questions = [{
        //     title : "Radio Question",
        //     type : "radio",
        //     answers : ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        //     formName : "quest_0",
        //     created_at : Date()
        // },{
        //     title : "Checkbox Question",
        //     type : "checkbox",
        //     answers : ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        //     formName : "quest_1",
        //     created_at : Date()
        // },{
        //     title : "Dropdown Question",
        //     type : "dropdown",
        //     answers : ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        //     formName : "quest_2",
        //     created_at : Date()
        // },{
        //     title : "Open ended Question",
        //     type : "open_ended",
        //     answers : [],
        //     formName : "quest_3",
        //     created_at : Date()
        // }];

    _q_type = {
        radio: "radio",
        checkbox: "checkbox",
        dropdown: "dropdown",
        open_ended: "open_ended"
    };
    
    _html_question_type = {
        radio : "radio.html",
        checkbox: "checkbox.html",
        dropdown : "dropdown.html",
        open_ended : "open_ended.html"
    };

    questionProto = {
        title: "",
        answers: [],
        type: "",
        formName : ""
    };
    
    

    questionModel = (function() {
        var create, questionCount = 4;

        create = function() {
            var temp = Object.create(questionProto);
            temp.formName = "quest_"+questionCount++;
            temp.created_at = Date();
            return temp;
        };

        return {
            create : create
        };
    }());

    this.getQuestionModel = function() {
        return questionModel;
    };
    
    this.addQuestion = function(question) {
        _questions.push(question);
    };

    this.getQuestions = function() {
        return _questions;
    };

    this.getTypes = function() {
        return _q_type;
    };
    
    this.getHtmlUrlForType = function(type){
        return _html_question_type[type];
    };
    
    this.addOrUpdateResult = function(result){
        var index = _results.indexOf(result);
        if( index > -1){
            _results[index] = result;
        }else{
            _results.push(result); 
        }
    };
    
    this.getResults = function(){
        return _results;  
    };
    
    this.resetResult = function(){
        _results = [];  
    };
});