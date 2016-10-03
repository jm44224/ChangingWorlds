'use strict';

siteInfoApp.controller('galleryController', function ($scope, $http) {
    
    $http.get('gallery/gallery.json').success(function (data) {
        // these are standard, even if not used
        $scope.title = data.title;
        $scope.names = data.data;
        $scope.footnote = data.footnote;
        $scope.images = data.images;
        $scope.files = data.files;
    });
});
