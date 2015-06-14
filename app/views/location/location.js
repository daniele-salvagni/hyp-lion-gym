<!-- =============================================================================================================== -->
<!-- =============================================== Daniele Salvagni - Hypermedia Applications (Web and Multimedia) -->

// A module is a collection of services, directives, controllers, filters, and configuration information.
// angular.module(name, [requires], [configFn]);
// 'ngMap' is the AngularJS module for Google Maps API
angular.module('lionApp.location', ['ngRoute', 'ngMap'])

    // $routeProvider is a Provider used for configuring routes.
    .config(['$routeProvider', function($routeProvider) {
        // when(path, route) - path is matched against $location.path
        // :name - All characters up to the next slash are matched and stored in $routeParams under the given name when
        // the route matches.
        $routeProvider.when('/location', {
            templateUrl: 'views/location/location.html',
            controller: 'LocationController'
        });
    }])


    .controller('LocationController', ['$scope', '$http', function($scope, $http) {

        var url = "http://gymlion.altervista.org/api/getContacts.php?callback=JSON_CALLBACK";

        $http.jsonp(url).
            success(function(data) {

                // The data obtained via JSON
                $scope.contacts = data[0];

                document.title = "Lion Gym - Location";

            }).
            error(function(data, status, headers, config) {
                $scope.error = true;
                console.log("Error loading data from JSONP.")
            });

    }]);
