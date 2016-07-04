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

   app.filter('orderObjectBy', function() {
     return function(items, field, reverse) {
        var filtered = [];
        angular.forEach(items, function(item) {
            filtered.push(item);
        });
        filtered.sort(function (a, b) {
            return (a[field] > b[field] ? 1 : -1);
        });
        if(reverse) 
            filtered.reverse();
        return filtered;
    };
   })

}());