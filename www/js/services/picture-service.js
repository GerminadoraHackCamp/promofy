(function () {
    'use strict';

    var app = angular.module('promofy.services.picture', []).factory('PictureService', [function () {

        return {

            set: function (text) {
               window.localStorage['promofy_currentPictureData'] = text;
            },

            get: function () {
                return window.localStorage['promofy_currentPictureData'];
            },

            reset: function () {
                window.localStorage.removeItem('promofy_currentPictureData');
            },

            hasValue: function () {
                return window.localStorage['promofy_currentPictureData'] != undefined;
            }
            
        };

    }]);

}());