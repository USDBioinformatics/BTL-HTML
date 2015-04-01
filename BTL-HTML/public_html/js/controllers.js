var btlControllers = angular.module('btlApp.controllers', ['btlApp.services']);

btlControllers.controller('ToolListController', function ($scope, ToolNames, SharedData) {
    
//    $scope.data = SharedData.getId();
    $scope.test = SharedData.getId();
    
    $scope.$watch('test', function(newValue, oldValue){
//        alert('ID CHANGED');
        if (newValue !== oldValue) SharedData.setId(newValue);
    });
    
    var entries = ToolNames.query(function () {
        //get first 25 entries
        //Entries is a JSON array of objects
        var toolArray = [];
        var tool;
        for(i = 0; i < 1000; i++){
            tool=entries[i];
            console.log(tool.version);
            toolArray[i] = tool;
        }
        $scope.list = toolArray;
//        buildJson(entries);
    }); //query() returns all the entries
    $scope.toolClick = function (id) {
//        getToolDetails(id);
        $scope.test = id;
    };
    
   $scope.getMoreTools = function(){
        alert("getting more tools");
    };
});

btlControllers.controller('ToolCountController', function ($scope, ToolCount) {
//    var result = ToolCount.query(function () {
//        alert("Count= " + result.size());
//        $scope.count = result.size;
//    });
});

btlControllers.controller('ToolDetailsController', function ($scope, SharedData, BetsById) {
        $scope.$watch(function () { return SharedData.getId(); }, function (newValue, oldValue) {
        if (newValue !== oldValue) $scope.test = newValue;
//        alert(newValue);
        BetsById.get({id: newValue}, function(response){
            $scope.details = response;
        });
        
        $scope.isBetsDisplayed = false;
        $scope.showBets = function(){
            $scope.isBetsDisplayed = true;
        };
//        var details = BetsById.get(function (){
//            $scope.details = details;
//        });
//    });
});
});

btlControllers.controller('SimilarToolsController', 
  ['$scope', '$state', function($scope, $state) {
    $scope.tool = {};
}]);
//function getToolDetails(id, $scope, SharedData) {
//    alert("Getting Tool Details for ID =  " + id);
//};