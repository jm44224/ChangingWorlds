'use strict';

// create the controller and inject Angular's $scope
siteInfoApp.controller('tourStormOnController', function ($scope, $http) {

    // create a message to display in our view
    $http.get('tour/stormon/stormon.json').success(function (data) {
        // these are standard, even if not used
        $scope.title = data.title;
        $scope.names = data.data;
        $scope.footnote = data.footnote;
        $scope.images = data.images;
        $scope.files = data.files;
    });
});
