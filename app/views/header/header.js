<!-- =============================================================================================================== -->
<!-- =============================================== Daniele Salvagni - Hypermedia Applications (Web and Multimedia) -->

angular.module('lionApp.header', [])

    // The $location service parses the URL in the browser address bar (based on the window.location) and makes the URL
    // available to your application. Changes to the URL in the address bar are reflected into $location service and
    // changes to $location are reflected into the browser address bar.
    .controller('HeaderController', ['$scope', '$location', function($scope, $location) {

        // This function is used to set 'active' links in the NavBar
        $scope.isActive = function(path) {
            //Returns true if the URL starts with path
            if ($location.path().substr(0, path.length) == path) {
                return true;
            } else {
                return false;
            }
        }

    }]);