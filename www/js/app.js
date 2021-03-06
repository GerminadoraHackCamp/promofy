(function () {
    'use strict';
    
    var app = angular.module('promofy', ['ionic',
                                         'promofy.controllers.offer',
                                         'promofy.controllers.include',
                                         'promofy.services.offer',
                                         'promofy.services.places',
                                         'promofy.services.picture',
                                         'ngCordova',
                                         'firebase'
                                        ]);

    app.config(function($stateProvider, $urlRouterProvider) {

      $stateProvider.state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      });

      $stateProvider.state('tab.offer', {
        url: '/offer',
        views: {
          'tab-offer': {
            templateUrl: 'templates/tab-offer.html',
            controller: 'OfferController'
          }
        }
      });

      $stateProvider.state('tab.include', {
        url: '/include',
        views: {
          'tab-include': {
            templateUrl: 'templates/tab-include.html',
            controller: 'IncludeController'
          }
        }
      });

      $urlRouterProvider.otherwise('/tab/offer');
    });

    app.run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {

        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
            StatusBar.overlaysWebView(true);
            StatusBar.styleLightContent();
        }
      });
    })

}());