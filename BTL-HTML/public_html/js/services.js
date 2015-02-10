/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('btlApp.services').factory('Entry', function($resource) {
  return $resource('http://localhost:8080/BTL-REST/resources/tools'); // Note the full endpoint address
});
