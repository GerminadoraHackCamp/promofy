angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.promoEs', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/promoEs.html',
        controller: 'promoEsCtrl'
      }
    }
  })

  .state('menu.cadastrarProduto', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cadastrarProduto.html',
        controller: 'cadastrarProdutoCtrl'
      }
    }
  })

  .state('menu.configuraEs', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/configuraEs.html',
        controller: 'configuraEsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});