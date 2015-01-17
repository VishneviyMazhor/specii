'use strict';

/**
 * @ngdoc function
 * @name shmuserApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shmuserApp
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getElementIndex(arr, id) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].id === id) {
      return i;
    } 
  }
  return -1;
}

angular.module('shmuserApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore || [];
    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);
    $scope.addTodo = function(){
      $scope.todos.push({id:getRandomInt(0,1000000),name:$scope.todose});
      $scope.todose = '';
    };
    $scope.removeTodo = function(id){
      $scope.todos.splice(getElementIndex($scope.todos,id), 1);
    };
  });

