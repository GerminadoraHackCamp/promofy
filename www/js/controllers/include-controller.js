(function () {
    'use strict';

    var app = angular.module('promofy.controllers.include', []);

    app.controller('IncludeController', [
        '$scope', 
        'PlacesService', 
        '$ionicLoading',
        '$cordovaCamera',
        '$ionicModal',
        'PictureService',
        '$ionicPopup',
        'OfferService',
        function (
            $scope, 
            PlacesService, 
            $ionicLoading,
            $cordovaCamera,
            $ionicModal,
            PictureService,
            $ionicPopup,
            OfferService
        ){

        $scope.offer = {
            image: "",
            name: "",
            price: 0,
            timestamp: Firebase.ServerValue.TIMESTAMP,
            place: {
                name: "",
                location: {
                    lat: 0,
                    lng: 0
                }
            }
        };

        $ionicModal.fromTemplateUrl('templates/places-modal.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
            loadData();
        });

        function loadData() {
            PlacesService.load().then(function(results){
                $scope.places = results;
            }) 
            .finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });
        } 

        $scope.doRefresh = function() {
            loadData();
        };
        
        $scope.savePlace = function(place) {
            $scope.offer.place.name = place.name;
            $scope.offer.place.location.lat = place.geometry.location.lat();
            $scope.offer.place.location.lng = place.geometry.location.lng();
            $scope.modal.hide();
        };

        function updateStatusBar() {
            if (window.StatusBar) {
                StatusBar.overlaysWebView(true);
                StatusBar.styleLightContent();
            }
        };

        function loadPictureData() {
            $scope.hasPictureValue = PictureService.hasValue();
        }  

        $scope.takePicture = function () {
            updateStatusBar();

            var options = { 
                quality : 100, 
                destinationType : Camera.DestinationType.DATA_URL, 
                sourceType : Camera.PictureSourceType.CAMERA,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 500,
                targetHeight: 500,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            };

            $cordovaCamera.getPicture(options).then(function(imageData) {
                PictureService.set(imageData);
                $scope.hasPictureValue = true;
                $scope.pictureValue = imageData;
                updateStatusBar();
            }, function(error) {
                $scope.hasPhotoValue = true;
                updateStatusBar();
            });
        };

        $scope.submitOffer = function (offer) {

            if (offer.price <= 0) {
                var alert = $ionicPopup.alert({
                    title: 'Erro',
                    template: 'Preencha os campos!'
                });
                return false;
            }

            if (offer.name == "") {
                var alert = $ionicPopup.alert({
                    title: 'Erro',
                    template: 'Preencha os campos!'
                });
                return false;
            }

            offer.image = PictureService.get();
            
            OfferService.add(offer);
           
            PictureService.reset();
            $scope.hasPictureValue = false;
            $scope.pictureValue = "";

            $scope.offer = {
                image: "",
                name: "",
                price: 0,
                timestamp: Firebase.ServerValue.TIMESTAMP,
                place: {
                    location: {
                        lat: 0,
                        lng: 0
                    }
                }
            };

            var alert = $ionicPopup.alert({
                title: 'Yeah!',
                template: 'Oferta cadastrada com sucesso.'
            });
        }

    }]);
}());

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {
        lat: -23.533773, 
        lng: -46.625290},
        zoom: 15
    });
}