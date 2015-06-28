;(function (){

  'use strict';

  angular.module('Komik')
    .controller('ImageList', ['$scope', 'ImageService', '$http', 'HEROKU', '$filter',

    function ($scope, ImageService, $http, HEROKU, $filter) {

      $scope.storage = [];

      var orderBy = $filter('orderBy');


      ImageService.getAll().success(function(data) {
        $scope.imageList = data;
        $scope.imageList = _.filter($scope.imageList, function (img) {
          return img.ios !== 1;
        });

        $scope.iosList = data;
        $scope.iosList = _.filter($scope.iosList, function (img) {
          return img.ios === 1;
        });
      });

      ImageService.getAccessories().success( function (data) {
        $scope.accessoryList = data;
      });


      $scope.store = function (image_url) {

        $('#all-pix').slideUp(500);
        $('#single-pix').fadeIn(1000);

        $('canvas').drawImage({
          layer: true,
          source: image_url,
          width: 400,
          height: 400,
          x: 200, y: 200,
          autosave: true,
          crossOrigin: 'anonymous'
        });

        $scope.storage = image_url;
      };

      $scope.addToCanvasSmall = function (assetUrl) {

        $('canvas').drawImage({
          layer: true,
          source: assetUrl,
          draggable: true,
          bringToFront: true,
          width: 50,
          height: 50,
          x: 200, y: 200,
          crossOrigin: 'anonymous'
        });
      };

      $scope.addToCanvasMedium = function (assetUrl) {

        $('canvas').drawImage({
          layer: true,
          source: assetUrl,
          draggable: true,
          bringToFront: true,
          width: 125,
          height: 125,
          x: 200, y: 200,
          crossOrigin: 'anonymous'
        });
      };

      $scope.addToCanvasLarge = function (assetUrl) {

        $('canvas').drawImage({
          layer: true,
          source: assetUrl,
          draggable: true,
          bringToFront: true,
          width: 200,
          height: 200,
          x: 200, y: 200,
          crossOrigin: 'anonymous'
        });
      };

      $scope.addToCanvasFlippedSmall = function (assetUrl) {

        $('canvas').drawImage({
          layer: true,
          source: assetUrl,
          draggable: true,
          bringToFront: true,
          width: 50,
          height: 50,
          scaleX: -1,
          x: 200, y: 200,
          crossOrigin: 'anonymous',
          inverted: true
        });
      };

      $scope.addToCanvasFlippedMedium = function (assetUrl) {

        $('canvas').drawImage({
          layer: true,
          source: assetUrl,
          draggable: true,
          bringToFront: true,
          width: 125,
          height: 125,
          scaleX:  -1,
          x: 200, y: 200,
          crossOrigin: 'anonymous',
          inverted: true
        });
      };

      $scope.addToCanvasFlippedLarge = function (assetUrl) {

        $('canvas').drawImage({
          layer: true,
          source: assetUrl,
          draggable: true,
          bringToFront: true,
          width: 200,
          height: 200,
          scaleX:  -1,
          x: 200, y: 200,
          crossOrigin: 'anonymous',
          inverted: true
        });
      };

      $scope.download = function () {
        $('canvas').saveCanvas();
        var image = $('canvas').getCanvasImage('png');
        var a = $("<a>").attr("href", image).attr("download", "img.png").appendTo("body");
        a[0].click();
        a.remove();
      };

      $scope.addText = function (inputText) {
        console.log(inputText);
        $('canvas').drawText({
          fillStyle: '#f23c27',
          draggable: true,
          strokeStyle: '#25a',
          strokeWidth: 0,
          x: 150, y: 100,
          fontSize: 28,
          fontFamily: 'Bangers, cursive',
          text: inputText
        });
      };

      $scope.reload = function () {
        window.location.reload();
      };

      $scope.restoreImageCanvas = function() {
        $('canvas').clearCanvas();
        $('canvas').drawImage({
          layer: true,
          source: $scope.storage,
          width: 400,
          height: 400,
          x: 200, y: 200,
          autosave: true,
          crossOrigin: 'anonymous'
        });
      };

      $scope.playsound = function () {
        var roar = $('video')[0];
        roar.play();
      };

      $scope.playFile = function () {
        $('.roar-audio').Play();
      };


    }]);

}());
