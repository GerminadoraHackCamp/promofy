(function () {
    'use strict';

    var app = angular.module('promofy.controllers.offer', []);

    app.controller('OfferController', [
        '$scope', 
        '$state',
        '$ionicLoading', 
        'OfferService',
        function (
            $scope, 
            $state, 
            $ionicLoading,
            OfferService
        ) {

        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        }); 

        OfferService.load().then(function(result) {
            $scope.offers = result;
            $ionicLoading.hide(); 
        })
        
    }]);

}());