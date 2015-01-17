'use strict';

/**
 * @ngdoc overview
 * @name shmuserApp
 * @description
 * # shmuserApp
 *
 * Main module of the application.
 */
angular
  .module('shmuserApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngMdIcons',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/gdapi', {
        templateUrl: 'views/gdapi.html',
        controller: 'GdapiCtrl'
      })
      .when('/vkapi',{
        templateUrl: 'views/vkapi.html',
        controller: 'VKapiCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
