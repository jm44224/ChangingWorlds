'use strict';

siteInfoApp.controller('aboutController', function ($scope, $http) {
    // create a message to display in our view
    $http.get('about/about.json').success(function (data) {
        // these are standard, even if not used
        $scope.title = data.title;
        $scope.names = data.data;
        $scope.footnote = data.footnote;
        $scope.images = data.images;
        $scope.files = data.files;
    });
});

