<!-- =============================================================================================================== -->
<!-- =============================================== Daniele Salvagni - Hypermedia Applications (Web and Multimedia) -->

// Filters module for lionApp
angular.module('lionApp.filters', [])

    // $sce is a service that provides Strict Contextual Escaping services to AngularJS.
    // This filter is to parse a string as HTML, by default all the strings are sanitized by Angular
    // In HTML: <div ng-bind-html="myData | renderHTML"></div>
    // HTML is used for text formatting.
    .filter('renderHTML', ['$sce', function ($sce) {
        return function (stringToParse) {
            return $sce.trustAsHtml(stringToParse);
        }
    }]);
