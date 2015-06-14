<!-- =============================================================================================================== -->
<!-- =============================================== Daniele Salvagni - Hypermedia Applications (Web and Multimedia) -->

// Module fot he homepage
angular.module('lionApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        // when(path, route) - path is matched against $location.path
        // :name - All characters up to the next slash are matched and stored in $routeParams under the given name when
        // the route matches.
        $routeProvider.when('/', {
            templateUrl: 'views/home/home.html',
            controller: 'HomeController'
        });
    }])

    .controller('HomeController', [function() {

        $(window).resize(function(){
            // test
        });

    }]);
