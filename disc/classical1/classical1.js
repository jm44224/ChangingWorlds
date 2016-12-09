'use strict';

// create the controller and inject Angular's $scope
siteInfoApp.controller('discClassical1Controller', function ($scope, $http) {

    // create a message to display in our view
    $http.get('disc/discpage.json').success(function (data) {
        // unique for discography
        $scope.releaselabel = data.releaselabel;
        $scope.timelabel = data.timelabel;
        $scope.labellabel = data.labellabel;
        $scope.tracklistlabel = data.tracklistlabel;
        $scope.bookletlabel = data.bookletlabel;
        $scope.multimedialabel = data.multimedialabel;
     });

    // create a message to display in our view
    $http.get('disc/classical1/classical1.json').success(function (data) {
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
        // for discpagewithmenu.html
        // this is now more than a tracklist
        // it is an array of anylists
        // but I also need to handle images
        $scope.tracklist = data.tracklist;
        // populate the select control
        $scope.menu = data.menu;
        // set the select control with first option
        $scope.disc_menu = $scope.menu[0].key;
    });
});
