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

        $scope.offers = OfferService.load();
        
    }]);

}());