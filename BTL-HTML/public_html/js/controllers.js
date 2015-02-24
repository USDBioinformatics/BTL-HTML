angular.module('btlApp.controllers', ['btlApp.services']);

angular.module('btlApp.controllers').controller('ToolListController', function ($scope, Entry) {
    $scope.phones = [
        {'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'}
    ];

    var entry = Entry.get({id: $scope.id}, function () {
        console.log(entry);
    }); // get() returns a single entry

    var entries = Entry.query(function () {
        $scope.list = entries;
    }); //query() returns all the entries

    $scope.entry = new Entry(); //You can instantiate resource class

    $scope.entry.data = 'some data';

    Entry.save($scope.entry, function () {
        //data saved. do something here.
    }); //saves an entry. Assuming $scope.entry is the Entry object  
});

