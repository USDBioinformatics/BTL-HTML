var btlControllers = angular.module('btlApp.controllers', ['btlApp.services']);

btlControllers.controller('ToolListController', function ($scope, ToolNames, SharedData) {
    $scope.tool = SharedData.getId();

    $scope.$watch('tool', function (newValue, oldValue) {
//        alert('ID CHANGED');
        if (newValue !== oldValue)
            SharedData.setId(newValue);
    });

    var entries = ToolNames.query(function () {//query() returns all the entries
        //Entries is a JSON array of objects
        $scope.list = entries; //shows all tools, array of Objects
    });

    /*
     * onToolClick Function - Gets ID of Tool
     * Tool Details are shown once the tool var is set
     */
    $scope.toolClick = function (id) {
        $scope.tool = id;
    };

});

btlControllers.controller('TreeController', function ($scope, ToolNames, SharedData, $q) {
    $scope.tool = SharedData.getId();
    $scope.tools;
    var toolList = [];

    var defer = $q.defer();
    defer.promise.then(function () { //going to happen in the future
        toolList = ToolNames.query(function () {
            $scope.tools = toolList;
        });
    });

    defer.resolve(); //when object is done being deferred, it will fire of the promise.then

    $scope.$watch('tools', function (newValue, oldValue) {
        if (newValue !== oldValue) {
            toolList = newValue;

            var toolSetOne = [];
            for (i = 0; i < 1500; i++) {
                toolSetOne.push(toolList[i]);
            }
            console.log("Set One " + JSON.stringify(toolSetOne));

            var toolSetTwo = [];
            for (i = 1500; i < 3500; i++) {
                toolSetTwo.push(toolList[i]);
            }

            var toolSetThree = [];
            for (i = 3500; i < toolList.length; i++) {
                toolSetThree.push(toolList[i]);
            }


            $scope.dataForTheTree =
                    [
                        {"name": "Bioinformatics Application", "children": toolSetOne},
                        {"name": "Bioinformatics Method", "children": toolSetTwo},
                        {"name": "Bological Domain", "children": toolSetThree}
                    ];
        }
    });

    //watches for the tool to be clicked and sets it's id and shows tool details
    $scope.$watch('tool', function (newValue, oldValue) {
        if (newValue !== oldValue) {
            SharedData.setId(newValue);
        }
    });

    //on tool click, update the selected tool
    $scope.showSelected = function (sel) {
        $scope.selectedNode = sel;
        $scope.tool = sel;
    };

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
});

btlControllers.controller('ToolDetailsController', function ($scope, SharedData, BetsById, ToolIcon) {
    $scope.toolIcon = "test";
//     var toolIcon = ToolIcon.query(function () {
//            $scope.toolIcon = toolIcon;
//            alert(toolIcon);
//        });
    $scope.$watch(function () {
        return SharedData.getId();
    }, function (newValue, oldValue) {
        if (newValue !== oldValue)
            $scope.tool = newValue;
        BetsById.get({id: newValue.id}, function (response) {
            $scope.details = response;
        });
        $scope.isBetsDisplayed = false;
        $scope.showBets = function () {
            $scope.isBetsDisplayed = true;
        };
    });
});

btlControllers.controller('RepoListController', function ($scope, RepoList) {
    var entries = RepoList.query(function () {
        $scope.repos = entries;
    });
});



btlControllers.controller('ToolCountController', function ($scope, ToolCount) {
    var result = ToolCount.query(function () {
        $scope.count = result;
    });
});

btlControllers.controller('BridgeListController', function ($scope, BridgeList) {
    var entries = BridgeList.query(function () {
        $scope.bridges = entries;
    });
});

btlControllers.controller('SimilarToolsController', function ($scope) {
    var tools = [
        {
            'ID': 1,
            'name': 'SimTool 1'
        },
        {
            'ID': 2,
            'name': 'SimTool 2'
        },
        {
            'ID': 3,
            'name': 'SimTool 3'
        },
        {
            'ID': 4,
            'name': 'SimTool 4'
        }

    ];
    $scope.similarTools = tools;
});