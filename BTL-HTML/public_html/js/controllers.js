var btlControllers = angular.module('btlApp.controllers', ['btlApp.services']);

btlControllers.controller('ToolListController', function ($scope, ToolNames, SharedData) {
    $scope.tool = SharedData.getId();

    $scope.$watch('tool', function (newValue, oldValue) {
//        alert('ID CHANGED');
        if (newValue !== oldValue)
            SharedData.setId(newValue);
    });

    var entries = ToolNames.query(function () {
        //Entries is a JSON array of objects

        //Test adding tools to array to display incrementally, shows the first 1000
//        var toolArray = [];
//        var tool;
//        for (i = 0; i < 1000; i++) {
//            tool = entries[i];
//            toolArray[i] = tool;
//        }
//        $scope.list = toolArray;
        $scope.list = entries; //shows all tools, array of Objects
    }); //query() returns all the entries

    /*
     * onToolClick Function - Gets ID of Tool
     * Tool Details are shown once the tool var is set
     */
    $scope.toolClick = function (id) {
        $scope.tool = id;
    };




    //Helperish Methods
    $scope.getMoreTools = function () {
        alert("getting more tools");
    };
});


btlControllers.controller('BridgeListController', function ($scope, BridgeList) {
    var entries = BridgeList.query(function () {
        $scope.bridges = entries;
    });
});

btlControllers.controller('TreeController', function ($scope, ToolNames, SharedData) {
    $scope.tool = SharedData.getId();

    $scope.$watch('tool', function (newValue, oldValue) {
        alert('ID CHANGED');
        if (newValue !== oldValue)
            SharedData.setId(newValue);
    });

    $scope.treeOptions = {
        nodeChildren: "children",
        dirSelectable: true,
        injectClasses: {
            ul: "a1",
            li: "a2",
            liSelected: "a7",
            iExpanded: "a3",
            iCollapsed: "a4",
            iLeaf: "a5",
            label: "a6",
            labelSelected: "a8"
        }
    };
    var entries = ToolNames.query(function () {
        $scope.testNames = entries;
    });

    $scope.toolClick = function (id) {
        alert(id);
        $scope.tool = id;
    };
    $scope.dataForTheTree =
            [
                {"name": "Bioinformatics Application", "children": [
                        {"name": "Abyss", "children": []},
                        {"name": "Gary", "children": [
                                {"name": "Jenifer", "children": [
                                        {"name": "Dani", "children": []},
                                        {"name": "Max", "children": []}
                                    ]}
                            ]}
                    ]},
                {"name": "Bioinformatics Method", "children": [
                        {"name": "Alignr", "children": []}
                    ]},
                {"name": "Bological Domain", "children": [
                        {"name": "Blast", "children": []}
                    ]}
            ];
});


btlControllers.controller('RepoListController', function ($scope, RepoList) {
    var entries = RepoList.query(function () {
        $scope.repos = entries;
    });
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