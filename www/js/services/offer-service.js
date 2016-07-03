(function () {
    'use strict';
 
    var app = angular.module('promofy.services.offer', [])
        .factory('OfferService', ['$firebaseArray','$q', function ($firebaseArray, $q) {

        return {
 
            load: function () {
                var deferred = $q.defer();
                var offersRef = new Firebase("https://promofyapp.firebaseio.com/offers");
                deferred.resolve($firebaseArray(offersRef));
                return deferred.promise;
            }

        };
 
    }]);
 
}());