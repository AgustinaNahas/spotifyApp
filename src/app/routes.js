import 'angular-route';
import {favCtrl} from './controllers';
import {artistCtrl} from './controllers';
import {albumCtrl} from './controllers';
import {searchCtrl} from './controllers';

export function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true,
    });

    $routeProvider
    .when('/', {
        templateUrl : '/app/views/index.html',
        controller: favCtrl
    })
    .when('/artist/:id', {
        templateUrl : '/app/views/band-albums.html',
        controller: artistCtrl
    })
    .when('/results', {
        templateUrl : '/app/views/results.html',
        controller: searchCtrl
    })
    .when('/album/:id', {
        templateUrl : '/app/views/album-detail.html',
        controller: albumCtrl
    });
}