import 'angular-route';

export function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true,
    });

    $routeProvider
    .when("/", {
        templateUrl : "/app/views/index.html"
    })
    .when("/artist/:id", {
        templateUrl : "/app/views/band-albums.html"
    })
    .when("/results", {
        templateUrl : "/app/views/results.html"
    })
    .when("/album", {
        templateUrl : "/app/views/album-detail.html"
    });
}