<!-- =============================================================================================================== -->
<!-- =============================================== Daniele Salvagni - Hypermedia Applications (Web and Multimedia) -->

// A module is a collection of services, directives, controllers, filters, and configuration information.
// angular.module(name, [requires], [configFn]);
angular.module('lionApp.course', ['ngRoute'])

    // $routeProvider is a Provider used for configuring routes.
    .config(['$routeProvider', function($routeProvider) {
        // The ordering does count, so if the route is /course/all this will be triggered first
        $routeProvider.when('/course/all', {
            templateUrl: 'views/course/all-courses.html',
            controller: 'AllCoursesController'
        });
        // when(path, route) - path is matched against $location.path
        // :name - All characters up to the next slash are matched and stored in $routeParams under the given name when
        // the route matches.
        $routeProvider.when('/course/:course', {
            templateUrl: 'views/course/course.html',
            controller: 'CourseController'
        });

        $routeProvider.when('/category/all', {
            templateUrl: 'views/course/categories.html',
            controller: 'AllCategoriesController'
        });

        $routeProvider.when('/category/:category', {
            templateUrl: 'views/course/category.html',
            controller: 'CategoryController'
        });


    }])

    // Controller for the course page, injected services:
    // - $scope provide separation between the model and the view, via a mechanism for watching the model for changes.
    // - $http is a core Angular service that facilitates communication with the remote HTTP servers via the browser's
    // XMLHttpRequest object or via JSONP.
    // - $routeParams is a service of the ngRoute module allows you retrieve the current set of route parameters.
    .controller('CourseController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

        // The GET parameters for the JSONP request (with JSONP it is not possible to make POST request)
        var courseParam = "course=" + $routeParams.course;
        // The complete URL for the request, &callback=JSON_CALLBACK is needed for JSONP
        var url = "http://gymlion.altervista.org/api/getCourse.php?" + courseParam + "&callback=JSON_CALLBACK";

        // The $http service is a function which takes a single argument � a configuration object � that is used to
        // generate an HTTP request and returns a promise with two $http specific methods: success and error.
        $http.jsonp(url).
            success(function(data) {

                // The data obtained via JSON
                $scope.courseData = data;

                // Photos are comma separated (otherwise I would need to many DB tables), split them so it is possible
                // to loop trough them.
                $scope.courseData.photos = $scope.courseData.photos.split(',');

                // Change the document title (plain JS, with Angular I would need to inject another service or a
                // $rootScope)
                document.title = "Lion Gym - Course - " + $scope.courseData.name;

            }).
            error(function(data, status, headers, config) {
                $scope.error = true;
                console.log("Error loading data from JSONP.")
            });

    }])

    .controller('AllCoursesController', ['$scope', '$http', function($scope, $http) {

        var courseParam = "course=all";
        var url = "http://gymlion.altervista.org/api/getCourse.php?" + courseParam + "&callback=JSON_CALLBACK";

        $http.jsonp(url).
            success(function(data) {

                // The data obtained via JSON
                $scope.courses = data;

                document.title = "Lion Gym - All Courses";

            }).
            error(function(data, status, headers, config) {
                $scope.error = true;
                console.log("Error loading data from JSONP.")
            });

    }])

    .controller('CategoryController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

        // The GET parameters for the JSONP request (with JSONP it is not possible to make POST request)
        var catParam = "category=" + $routeParams.category;
        // The complete URL for the request, &callback=JSON_CALLBACK is needed for JSONP
        var url = "http://gymlion.altervista.org/api/getCategory.php?" + catParam + "&callback=JSON_CALLBACK";

        $http.jsonp(url).
            success(function(data) {

                $scope.category = $routeParams.category;

                // The data obtained via JSON
                $scope.categoryData = data;

                // Change the document title (plain JS, with Angular I would need to inject another service or a
                // $rootScope)
                document.title = "Lion Gym - Category - " + $routeParams.category;

            }).
            error(function(data, status, headers, config) {
                $scope.error = true;
                console.log("Error loading data from JSONP.")
            });

    }])

    .controller('AllCategoriesController', ['$scope', '$http', function($scope, $http) {

    var catParam = "category=all";
    var url = "http://gymlion.altervista.org/api/getCategory.php?" + catParam + "&callback=JSON_CALLBACK";

    $http.jsonp(url).
        success(function(data) {

            // The data obtained via JSON
            $scope.categories = data;

            document.title = "Lion Gym - All Categories";

        }).
        error(function(data, status, headers, config) {
            $scope.error = true;
            console.log("Error loading data from JSONP.")
        });

}]);
