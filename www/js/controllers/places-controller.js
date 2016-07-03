(function () {
    'use strict';

    var app = angular.module('promofy.controllers.places', []);

    app.controller('PlacesController', ['$scope', 'PlacesService', '$ionicLoading',
        function ($scope, PlacesService, $ionicLoading) {

        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });  

        PlacesService.load().then(function(results){
            console.log(results);
            $scope.places = results;
            $ionicLoading.hide(); 
        })

    }]);
}());


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -23.533773, lng: -46.625290},
    zoom: 15});
}
