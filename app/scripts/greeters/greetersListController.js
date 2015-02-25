/**
 * Created by jnn on 24/02/2015.
 */
'use strict';

greeterApp.controller('GreetersListCtrl',['$scope','$stateParams', 'Friends',function($scope, $stateParams, Friends){
  $scope.country = $stateParams.country;
  $scope.friends = Friends.getByCountries($scope.country);
}])
