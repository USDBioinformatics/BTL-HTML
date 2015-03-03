var btlControllers = angular.module('btlApp.controllers', ['btlApp.services']);

btlControllers.controller('ToolListController', function ($scope, ToolNames, SharedData) {
    
//    $scope.data = SharedData.getId();
    $scope.test = SharedData.getId();
    
    $scope.$watch('test', function(newValue, oldValue){
        alert('ID CHANGED');
        if (newValue !== oldValue) SharedData.setId(newValue);
    });
    
    var entries = ToolNames.query(function () {
        $scope.list = entries;
//        buildJson(entries);
    }); //query() returns all the entries
    $scope.toolClick = function (id) {
//        getToolDetails(id);
        $scope.test = id;
    };
});

btlControllers.controller('ToolCountController', function ($scope, ToolCount) {
//    var result = ToolCount.query(function () {
//        alert("Count= " + result.size());
//        $scope.count = result.size;
//    });
});

btlControllers.controller('ToolDetailsController', function ($scope, SharedData) {
        $scope.$watch(function () { return SharedData.getId(); }, function (newValue, oldValue) {
        if (newValue !== oldValue) $scope.test = newValue;
    });
});


//function getToolDetails(id, $scope, SharedData) {
//    alert("Getting Tool Details for ID =  " + id);
//};