(function () {
    'use strict';
 
    var app = angular.module('promofy.services.places', [])
        .factory('PlacesService', ['$cordovaGeolocation','$q', function ($cordovaGeolocation,$q) {

        return {
 
            load: function () {
                    
                var deferred = $q.defer();

                function nearByCallback(results, status) {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        
                        for (var i = 0; i < results.length; i++) {
                            console.log(results[i]);
                        }
                        deferred.resolve(results);
                    }
                }

                ionic.Platform.ready(function (){
                     var options = {timeout: 10000, enableHighAccuracy: true};
                    $cordovaGeolocation.getCurrentPosition(options)
                    .then(function(position){
                       console.log(position);
                       var geolocation = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                       };
                       var service = new google.maps.places.PlacesService(map);
                       service.nearbySearch({
                        location: geolocation,
                        radius: 500,
                        type: ['grocery_or_supermarket']
                    }, nearByCallback);

                    
                       
                    })

                });

                return deferred.promise;
            }

        };
 
    }]);
 
}());