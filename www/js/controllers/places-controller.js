(function () {
    'use strict';

    var app = angular.module('promofy.controllers.places', []);

    app.controller('PlacesController', [
        '$scope',
        function ($scope) {

        $scope.places = [{ name: "Padaria"}];
        
    }]);

}());