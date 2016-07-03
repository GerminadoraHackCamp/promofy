(function () {
    'use strict';

    var app = angular.module('promofy.controllers.offer', []);

    app.controller('OfferController', [
        '$scope', 
        '$state',
        '$ionicLoading', 
        'OfferService',
        '$cordovaCamera',
        function (
            $scope, 
            $state, 
            $ionicLoading,
            OfferService,
            $cordovaCamera
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
        
        function updateStatusBar() {
            if (window.StatusBar) {
                StatusBar.overlaysWebView(true);
                StatusBar.styleLightContent();
            }
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
                //PictureService.set(imageData);
                //$scope.hasPictureValue = true;
                //ScanService.reset();
                //loadScanCode();
                updateStatusBar();
            }, function(error) {
                //$scope.hasPhotoValue = false;
                updateStatusBar();
            });
        };
        
    }]);

}());