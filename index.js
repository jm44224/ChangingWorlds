'use strict';

$(document).ready(function(){
    /*
        enable one theme CSS 
        TO DO - use a cookie to find last theme
    */
    setTheme("0");
    
    $( "#vmcc_theme" ).change(function(event) {
        setTheme( $( "select option:selected" ).val().toString() );
    });
});

function setTheme(theme)
{
     $("#stc").attr("disabled", "disabled");
     $("#vp").attr("disabled", "disabled");
    
    switch (theme.toLowerCase()) {
        case 'stc':
        case '1':
            $("#mainImg").attr("src","styles/stc/stc_img.jpg");
            $("#stc").removeAttr("disabled");
            break;
        
        default:
            $("#mainImg").attr("src","styles/vp/vp_img.jpg");
            $("#vp").removeAttr("disabled");
            break;
    }    
}

/* Set the width of the side navigation to 250px */
function toggleNav() {
    var $sidemenu = $("#mySidenav");
    if ($sidemenu.width() < 1) {
        $sidemenu.width(250)
    } else {
        $sidemenu.width(0);
    }
}

/* main controller */
var siteInfoApp = angular.module('myApp', ['ngRoute'])

.controller('mainCtrl', function ($scope, $http) {
    /* load the main page, and the menu */
    /* TO DO - can this be multiple languages? */
    $http.get('index.json').success(function (data) {
        $scope.header = data.header;
        $scope.asterisk = data.asterisk;
        $scope.copyright = data.copyright;
        $scope.footer = data.footer;
        $scope.menuItems = data.menu;
    });
    /* TO DO - can this be multiple languages? */
    $http.get('styles/themes.json').success(function (data) {
        $scope.themes = data.themes;
    });
})

/* 
    configure our routes 
    TO DO - do sub routes go here?
*/
.config(function ($routeProvider) {

    $routeProvider
        .when('/about', {
            templateUrl: 'about/about.html',
            controller: 'aboutController'
        })
        .when('/gallery', {
            templateUrl: 'gallery/gallery.html',
            controller: 'galleryController'
        })
        .when('/disc', {
            templateUrl: 'disc/disc.html',
            controller: 'discController'
        })
        .when('/tour', {
            templateUrl: 'tour/tour.html',
            controller: 'tourController'
        })
        .when('/tourRedHot', {
            templateUrl: 'tour/tourpage.html',
            controller: 'tourRedHotController'
        })
        .when('/tourClassical1', {
            templateUrl: 'tour/tourpage.html',
            controller: 'tourClassical1Controller'
        })
        .when('/tourStormOn', {
            templateUrl: 'tour/tourpage.html',
            controller: 'tourStormOnController'
        })
        .when('/tourFourSeasons', {
            templateUrl: 'tour/tourpage.html',
            controller: 'tourFourSeasonsController'
        })
        .when('/tourChangeBest', {
            templateUrl: 'tour/tourpage.html',
            controller: 'tourChangeBestController'
        })
        .when('/download', {
            templateUrl: 'download/download.html',
            controller: 'downloadController'
        })
        .when('/links', {
            templateUrl: 'links/links.html',
            controller: 'linksController'
        })
        .when('/contact', {
            templateUrl: 'contact/contact.html',
            controller: 'contactController'
        })
        .when('/', {
            templateUrl: 'about/about.html',
            controller: 'aboutController'
        });
});
