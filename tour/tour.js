'use strict';

// create the controller and inject Angular's $scope
siteInfoApp.controller('tourController', function ($scope, $http) {
    // create a message to display in our view
    $http.get('tour/tour.json').success(function (data) {
        // these are standard, even if not used
        $scope.title = data.title;
        $scope.names = data.data;
        $scope.footnote = data.footnote;
        $scope.images = data.images;
        $scope.files = data.files;
    });
});