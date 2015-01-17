'use strict';

/**
 * @ngdoc function
 * @name shmuserApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the shmuserApp
 */
angular.module('shmuserApp')
  //.controller('GdapiCtrl', function ($scope) {
  .controller('GdapiCtrl', function ($scope,$http) {
  		$scope.state = {num:1,text:''};
  	$scope.senReq = function(){
	    $scope.state.num = 0;
	    $scope.state.text = 'Отправка заявления...';
	    $http.jsonp('https://script.google.com/macros/s/AKfycbx8FgY9EysWAqtYnqXbe2hbqpFm2gcYRynjF-TsdMJbibR-8BTu/exec?name='+encodeURIComponent($scope.name)+'&lname='+encodeURIComponent($scope.lname)+'&msize='+$scope.msize+'&prefix=JSON_CALLBACK').
		  success(function(data) {
		    console.log('REQ SUCCESS: '+data);
		    $scope.name = '';
		    $scope.lname = '';
		    $scope.msize = '';
		    $scope.state.num = 1;
		    $scope.state.text = 'Ваше заявление отправлено';
		  }).
		  error(function(data) {
		    console.log('REQ ERROR: '+data);
		  });	
  	};
  });
