(function () {
    'use strict';
 
    var app = angular.module('promofy.services.offer', [])
        .factory('OfferService', ['$firebaseArray', function ($firebaseArray) {

        return {
 
            load: function () {
                // var setting = SettingsService.get();
                // var deferred = $q.defer();
                // $http
                // .get(url + "/ongs/" + setting.operation + "/?forceReload=" + forceReload)
                // .then(function (response) {
                //     deferred.resolve(Ong.apiResponseTransformer(response.data));
                // });
                // return deferred.promise;
                var offersRef = new Firebase("https://promofyapp.firebaseio.com/offers");
                return $firebaseArray(offersRef);
            }

        };
 
    }]);
 
}());