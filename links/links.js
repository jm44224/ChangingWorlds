siteInfoApp.controller('linksController', function ($scope, $http) {
    $http.get('links/links.json').success(function (data) {
        // these are standard, even if not used
        $scope.title = data.title;
        $scope.names = data.data;
        $scope.footnote = data.footnote;
        $scope.images = data.images;
        $scope.files = data.files;
    });
});