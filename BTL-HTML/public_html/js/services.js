var btlServices = angular.module('btlApp.services', ['ngResource']);

btlServices.factory('ToolNames', function ($resource) {
    return $resource('http://osmonds.usd.edu/BTL-REST/resources/tools/names'); // Note the full endpoint address
});

btlServices.factory('ToolCount', function ($resource) {
    return $resource(
            'http://localhost:8080/BTL-REST/resources/tools/count',
            {'query': {method: 'GET', isArray: false}}
    ); // Note the full endpoint address
});

btlServices.factory('BetsById', function ($resource) {
    return $resource('http://osmonds.usd.edu/BTL-REST/resources/bets/:id',
    { 
        get:{
            method: 'GET',
            isArray:false}
        });
});
btlServices.factory('ToolIcon', function ($resource) {
    return $resource('http://localhost:8080/BTL-REST/resources/tools/icon/1'); // Note the full endpoint address
});


btlServices.factory('SharedData', function () {
    var data = {id: ''};

    return {
        getId: function () {
            return data.id;
        },
        setId: function (value) {
            data.id = value;
        }
    };
});


//btlServices.service('sharedId', function(){
//    var id = 'TEST ID !!!!!!';
//    
//    return {
//        getId : function(){
//            return id;
//        },
//        setId: function(value){
//            id = value;
//        }
//    };
//});