var btlControllers = angular.module('btlApp.controllers', ['btlApp.services']);

btlControllers.controller('ToolListController', function ($scope, ToolNames, SharedData) {
    $scope.tool = SharedData.getId();

    $scope.$watch('tool', function (newValue, oldValue) {
//        alert('ID CHANGED');
        if (newValue !== oldValue)
            SharedData.setId(newValue);
    });

    var entries = ToolNames.query(function () {
        //get first 25 entries
        //Entries is a JSON array of objects
        var toolArray = [];
        var tool;
        for (i = 0; i < 1000; i++) {
            tool = entries[i];
            console.log(tool.version);
            toolArray[i] = tool;
        }
        $scope.list = toolArray;
    }); //query() returns all the entries

    /*
     * onToolClick Function - Gets ID of Tool
     */
    $scope.toolClick = function (id) {
        $scope.tool = id;
    };




    //Helperish Methods
    $scope.getMoreTools = function () {
        alert("getting more tools");
    };
});

btlControllers.controller('CategoryController', function ($scope) {
    //How can we categorize? EDAM ontology, .owl file
    $scope.categories = {"categories": [
            {"name": "Format",
             "childCt": 500
            },
            {"name": "Operation",
             "childCt": 500
            },
            {"name": "Topic",
             "childCt": 500
            }
        ]};
});

btlControllers.controller('ToolCountController', function ($scope, ToolCount) {
//    var result = ToolCount.query(function () {
//        alert("Count= " + result.size());
//        $scope.count = result.size;
//    });
});

btlControllers.controller('ToolDetailsController', function ($scope, SharedData, BetsById) {
    $scope.$watch(function () {
        return SharedData.getId();
    }, function (newValue, oldValue) {
        if (newValue !== oldValue)
            $scope.tool = newValue;
        BetsById.get({id: newValue}, function (response) {
            $scope.details = response;
        });

        $scope.isBetsDisplayed = false;
        $scope.showBets = function () {
            $scope.isBetsDisplayed = true;
        };
    });
});

btlControllers.controller('SimilarToolsController',
        ['$scope', '$state', function ($scope, $state) {
                $scope.tool = {};
            }]);