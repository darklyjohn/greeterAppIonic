/**
 * Created by jnn on 23/02/2015.
 */
'use strict';

//greeterApp.controller('TestCtrl',[function(){
//  var test = {};
//  var doSmthg = 2;
//  var two = doSmthg * 2;
//  //$scope.country = $stateParams.countryName;
//  //$scope.friends = Friends.getByCountries($stateParams.countryName);
//}])


greeterApp.controller('TestCtrl', function($scope, Friends) {
    $scope.friends = Friends.all();
  })
