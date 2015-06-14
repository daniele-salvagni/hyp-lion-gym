<!-- =============================================================================================================== -->
<!-- =============================================== Daniele Salvagni - Hypermedia Applications (Web and Multimedia) -->

// A module is a collection of services, directives, controllers, filters, and configuration information.
// angular.module(name, [requires], [configFn]);
angular.module('lionApp.membership', ['ngRoute'])

    // $routeProvider is a Provider used for configuring routes.
    .config(['$routeProvider', function($routeProvider) {
        // when(path, route) - path is matched against $location.path
        // :name - All characters up to the next slash are matched and stored in $routeParams under the given name when
        // the route matches.
        $routeProvider.when('/membership', {
            templateUrl: 'views/membership/membership.html'
        });
    }]);
