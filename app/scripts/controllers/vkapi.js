'use strict';

/**
 * @ngdoc function
 * @name shmuserApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the shmuserApp
 */
angular.module('shmuserApp')
  .controller('VKapiCtrl', function ($scope,$http) {
  	$scope.message = '';
  	$scope.sendstate = '';
  	$scope.news = [];
  	$scope.user_ids = [];
  	$scope.group = {};
  	$scope.wallAdd = function(){
	    $http.jsonp('https://api.vk.com/method/wall.post?owner_id=-'+$scope.group.gid+'&message='+encodeURIComponent($scope.message)+'&from_group=1&access_token=ce2dbf839e0708b2aab5fae2be57ef88079b2acaf38ec3328ed82f23d783b0e9520f82eccc0a5267b4aaf&callback=JSON_CALLBACK').
		  success(function(data) {
		    console.log(data);
		    $scope.news.splice(0,0,{id:data.response.post_id, text:$scope.message});
		    $scope.message = '';
		  }).
		  error(function(data) {
		    console.log('REQ ERROR: '+data);
		  });	
  	};
  	$scope.removePost = function(id,index){
	    $http.jsonp('https://api.vk.com/method/wall.delete?owner_id=-'+$scope.group.gid+'&post_id='+id+'&access_token=ce2dbf839e0708b2aab5fae2be57ef88079b2acaf38ec3328ed82f23d783b0e9520f82eccc0a5267b4aaf&callback=JSON_CALLBACK').
		  success(function(data) {
		    console.log(data);
		    $scope.news.splice(index,1);
		  }).
		  error(function(data) {
		    console.log('REQ ERROR: '+data);
		  });	
  	};
  	$scope.senReq = function(){
	    $http.jsonp('https://api.vk.com/method/groups.getById?group_id=vkapiwall&fields=photo_50&callback=JSON_CALLBACK').
		  success(function(data) {
		    console.log(data);
		    $scope.group = data.response[0];
		  }).
		  error(function(data) {
		    console.log('REQ ERROR: '+data);
		  });	
	    $http.jsonp('https://api.vk.com/method/wall.get?domain=vkapiwall&offset=0&callback=JSON_CALLBACK').
		  success(function(data) {
		    console.log(data);
		    $scope.news = data.response;
		    $scope.news.splice(0,1);
		    loadPhotos_50();
		  }).
		  error(function(data) {
		    console.log('REQ ERROR: '+data);
		  });	
  	};
  	function loadPhotos_50()
  	{
  		var user_ids=[];
		for (var i = 0; i < $scope.news.length; i++) {
			if($scope.news[i].from_id > 0){
	    		user_ids.push($scope.news[i].from_id);
	    	}
			else if($scope.news[i].signer_id){
	    		user_ids.push($scope.news[i].signer_id);
	    	}
	    }
	    console.log(user_ids.length);
	    $http.jsonp('https://api.vk.com/method/users.get?user_ids='+user_ids.toString()+'&fields=photo_50,domain&callback=JSON_CALLBACK').
		  success(function(data) {
		    console.log(data);
		    $scope.user_ids = data.response;
		    for (var i = 0; i < $scope.news.length; i++) {
				var user_data;
				if($scope.news[i].from_id > 0){
					user_data = getUserData($scope.news[i].from_id);
		    		$scope.news[i].face = user_data.face;
		    		$scope.news[i].author = user_data.author;
		    		$scope.news[i].author_link = user_data.author_link;
		    	}
				else if($scope.news[i].signer_id){
		    		user_data = getUserData($scope.news[i].signer_id);
		    		$scope.news[i].signer_face = user_data.face;
		    		$scope.news[i].signer_name = user_data.author;
		    		$scope.news[i].signer_link = user_data.author_link;
		    	}
		    }
		  }).
		  error(function(data) {
		    console.log('REQ ERROR: '+data);
		  });	
  	}
  	function getUserData(user_id)
  	{
  		for (var i = 0; i < $scope.user_ids.length; i++) {
  			if($scope.user_ids[i].uid === user_id){
  				return{
  					face : $scope.user_ids[i].photo_50,
  					author : $scope.user_ids[i].first_name+' '+$scope.user_ids[i].last_name,
  					author_link : $scope.user_ids[i].domain
  				};
  			}
  		}
  	}
  });
