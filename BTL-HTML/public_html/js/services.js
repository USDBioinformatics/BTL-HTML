var btlServices = angular.module('btlApp.services',[]);

btlServices.factory('Entry', function($resource) {
  return $resource('http://localhost:8080/BTL-REST/resources/tools/names'); // Note the full endpoint address
});
