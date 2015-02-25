/**
 * Created by jnn on 23/02/2015.
 */
'use strict';

greeterApp.controller('HomeCtrl',['$scope', '$state',function($scope, $state){
  $scope.country = {};
 $scope.search = function(){
   $state.go("tab.greeterscountry", {'country': $scope.country.name});
 }
}])
