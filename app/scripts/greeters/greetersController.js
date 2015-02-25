/**
 * Created by jnn on 24/02/2015.
 */
'use strict';

greeterApp.controller('GreetersCtrl', ['$scope','countryService','currentCountryName',function($scope,countryService,currentCountryName){
  $scope.data = { "countries" : [], "search" : '' };



  $scope.search = function() {

    countryService.citiesByCountry($scope.data.search).then(
      function(matches) {
        $scope.data.countries = matches;
      }
    )
  }
  if(currentCountryName){
    $scope.data.search = currentCountryName;
    $scope.search();
  }

  $scope.clear = function(){
    $scope.data = { "countries" : [], "search" : '' };
  }
}])
