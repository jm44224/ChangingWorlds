'use strict';

// create the controller and inject Angular's $scope
siteInfoApp.controller('discChinaGirlController', function ($scope, $http) {

    // create a message to display in our view
    $http.get('disc/discpage.json').success(function (data) {
        // unique for discography
        $scope.releaselabel = data.releaselabel;
        $scope.timelabel = data.timelabel;
        $scope.labellabel = data.labellabel;
        $scope.tracklistlabel = data.tracklistlabel;
     });

    // create a message to display in our view
    $http.get('disc/chinagirl/chinagirl.json').success(function (data) {
        // these are standard, even if not used
        $scope.title = data.title;
        $scope.names = data.data;
        $scope.footnote = data.footnote;
        $scope.images = data.images;
        $scope.files = data.files;
        // unique for discography
        $scope.year = data.year;
        $scope.release = data.release;
        $scope.time = data.time;
        $scope.tracks = data.tracks;
        $scope.images = data.images;
        $scope.extra = data.extra;
        $scope.label = data.label;
        $scope.tracklist = data.tracklist;
    });
});
