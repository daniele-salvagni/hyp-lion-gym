<!-- =============================================================================================================== -->
<!-- =============================================== Daniele Salvagni - Hypermedia Applications (Web and Multimedia) -->

// The angular.module is a global place for creating, registering and retrieving Angular modules. All modules (angular
// core or 3rd party) that should be available to an application must be registered using this mechanism.

// Declare app level module which depends on views, and components. With 1 component per file, there is no need to
// introduce a variable for the module. (It is a best practice)
angular.module('lionApp', [
    'ngRoute', // The ngRoute module provides routing and deeplinking services and directives for angular apps.
    'lionApp.header',
    'lionApp.home',
    'lionApp.course',
    'lionApp.instructor',
    'lionApp.location',
    'lionApp.membership',
    'lionApp.filters'
]).
    config([
        // $routeProvider is used for configuring routes in the ngRoute module.
        '$routeProvider', function ($routeProvider) {
            // Set route definition that will be used on route change when no other route definition is matched.
            $routeProvider.otherwise({redirectTo: '/'});
        }
    ]);