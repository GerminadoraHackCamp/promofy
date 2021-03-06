(function () {
    'use strict';
 
    var app = angular.module('promofy.services.offer', [])
        .factory('OfferService', ['$firebaseArray','$q', function ($firebaseArray, $q) {

        return {
 
            load: function () {
                var deferred = $q.defer();
                var offersRef = new Firebase("https://promofyapp.firebaseio.com/offers");
                var fireArray = $firebaseArray(offersRef.orderByChild("timestamp").limitToLast(20)); 
                deferred.resolve(fireArray);
                return deferred.promise;
            },

            add: function (offer) {
                var offersRef = new Firebase("https://promofyapp.firebaseio.com/offers");
                offersRef.push(offer);
            }

        };
 
    }]);
 
}());