<!-- =============================================================================================================== -->
<!-- =============================================== Daniele Salvagni - Hypermedia Applications (Web and Multimedia) -->

// A module is a collection of services, directives, controllers, filters, and configuration information.
// angular.module(name, [requires], [configFn]);
angular.module('lionApp.instructor', ['ngRoute'])

    // $routeProvider is a Provider used for configuring routes.
    .config(['$routeProvider', function($routeProvider) {
        // The ordering does count, so if the route is /instructor/all this will be triggered first
        $routeProvider.when('/instructor/all', {
            templateUrl: 'views/instructor/all-instructors.html',
            controller: 'AllInstructorsController'
        });
        // when(path, route) - path is matched against $location.path
        // :name - All characters up to the next slash are matched and stored in $routeParams under the given name when
        // the route matches.
        $routeProvider.when('/instructor/:instructor', {
            templateUrl: 'views/instructor/instructor.html',
            controller: 'InstructorController'
        });
    }])

    // Controller for the instructor page, injected services:
    // - $scope provide separation between the model and the view, via a mechanism for watching the model for changes.
    // - $http is a core Angular service that facilitates communication with the remote HTTP servers via the browser's
    // XMLHttpRequest object or via JSONP.
    // - $routeParams is a service of the ngRoute module allows you retrieve the current set of route parameters.
    .controller('InstructorController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

        // The GET parameters for the JSONP request (with JSONP it is not possible to make POST request)
        var instructorParam = "instructor=" + $routeParams.instructor;
        // The complete URL for the request, &callback=JSON_CALLBACK is needed for JSONP
        var url = "http://gymlion.altervista.org/api/getInstructor.php?" + instructorParam + "&callback=JSON_CALLBACK";

        // The $http service is a function which takes a single argument — a configuration object — that is used to
        // generate an HTTP request and returns a promise with two $http specific methods: success and error.
        $http.jsonp(url).
            success(function(data) {

                // The data obtained via JSON
                $scope.instructorData = data;

                // Photos are comma separated (otherwise I would need to many DB tables), split them so it is possible
                // to loop trough them.
                $scope.instructorData.photos = $scope.instructorData.photos.split(',');

                // Change the document title (plain JS, with Angular I would need to inject another service or a
                // $rootScope)
                document.title = "Lion Gym - Instructor - " + $scope.instructorData.name;



                // GET TWITTER DATA
                if ($scope.instructorData.twitter != "") {

                    var twitterParams = "user=" + $scope.instructorData.twitter;
                    // The complete URL for the request, &callback=JSON_CALLBACK is needed for JSONP
                    var twitterUrl = "http://gymlion.altervista.org/api/getTimeline.php?" + twitterParams
                        + "&callback=JSON_CALLBACK";

                    $http.jsonp(twitterUrl).
                        success(function (data) {

                            // The data obtained via JSON
                            $scope.instructorData.tweets = data;;
                            console.log($scope.instructorData);

                        }).
                        error(function () {
                            $scope.error = true;
                            console.log("Error loading twitter data from JSONP.")
                        });
                }

            }).
            error(function() {
                $scope.error = true;
                console.log("Error loading instructor data from JSONP.")
            });


    }])

    .controller('AllInstructorsController', ['$scope', '$http', function($scope, $http) {

        var instructorParam = "instructor=all";
        var url = "http://gymlion.altervista.org/api/getInstructor.php?" + instructorParam + "&callback=JSON_CALLBACK";

        $http.jsonp(url).
            success(function(data) {

                $scope.instructors = data;

                document.title = "Lion Gym - Our Instructors";

            }).
            error(function() {
                $scope.error = true;
                console.log("Error loading instructors data from JSONP.")
            });

    }]);
