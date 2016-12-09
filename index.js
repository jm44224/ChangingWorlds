'use strict';

$(document).ready(function(){
    /*
        enable one theme CSS 
        TO DO - use a cookie to find last theme
    */
    setTheme("0");
    
    $( "#vmcc_theme" ).change(function(event) {
        setTheme( $( "#vmcc_theme option:selected" ).val().toString() );
    });
    $("#divBody").show();
});

function setTheme(theme)
{
    $("#stc").attr("disabled", "disabled");
    $("#vp").attr("disabled", "disabled");
    $("#stus").attr("disabled", "disabled");
    $("#cl1").attr("disabled", "disabled");
    $("#cc1").attr("disabled", "disabled");
    $("#fs").attr("disabled", "disabled");
    
    switch (theme.toLowerCase()) {
 
        case 'fs':
        case '4':
            $("#mainImg").attr("src","styles/fs/fs_img.jpg");
            $("#fs").removeAttr("disabled");
            break;
            
        case 'cc1':
        case '3':
            $("#mainImg").attr("src","styles/cc1/cc1_img.jpg");
            $("#cc1").removeAttr("disabled");
            break;
            
        case 'cl1':
        case '2':
            $("#mainImg").attr("src","styles/cl1/cl1_img.jpg");
            $("#cl1").removeAttr("disabled");
            break;
            
            
        case 'stus':
        case '5':
            $("#mainImg").attr("src","styles/stus/stus_img.jpg");
            $("#stus").removeAttr("disabled");
            break;
            
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
var siteInfoApp = angular.module('myApp', ['ngRoute']).controller('mainCtrl', function ($scope, $http) {
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
        .when('/discAlternative', {
            templateUrl: 'disc/discpagewithmenu.html',
            controller: 'discAlternativeController'
        })
        .when('/discBerlin', {
            templateUrl: 'disc/discpage.html',
            controller: 'discBerlinController'
        })
        .when('/discBestOf', {
            templateUrl: 'disc/discpage.html',
            controller: 'discBestOfController'
        })
        .when('/discChinaGirl', {
            templateUrl: 'disc/discpage.html',
            controller: 'discChinaGirlController'
        })
        .when('/discChoreography', {
            templateUrl: 'disc/discpage.html',
            controller: 'discChoreographyController'
        })
        .when('/discClassical1', {
            templateUrl: 'disc/discpagewithmenu.html',
            controller: 'discClassical1Controller'
        })
        .when('/discEarlyYears', {
            templateUrl: 'disc/discpagewithmenu.html',
            controller: 'discEarlyYearsController'
        })       
        .when('/discFourSeasons', {
            templateUrl: 'disc/discpagewithmenu.html',
            controller: 'discFourSeasonsController'
        })
        .when('/discKids', {
            templateUrl: 'disc/discpage.html',
            controller: 'discKidsController'
        })
        .when('/discRoyal', {
            templateUrl: 'disc/discpage.html',
            controller: 'discRoyalController'
        })
        .when('/discStorm', {
            templateUrl: 'disc/discpage.html',
            controller: 'discStormController'
        })
        .when('/discSubject', {
            templateUrl: 'disc/discpage.html',
            controller: 'discSubjectController'
        })
        .when('/discTBConcertos', {
            templateUrl: 'disc/discpage.html',
            controller: 'discTBConcertosController'
        })
        .when('/discUltimate', {
            templateUrl: 'disc/discpage.html',
            controller: 'discUltimateController'
        })
        .when('/discViolin', {
            templateUrl: 'disc/discpage.html',
            controller: 'discViolinController'
        })
        .when('/discVPlayer', {
            templateUrl: 'disc/discpage.html',
            controller: 'discVPlayerController'
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
