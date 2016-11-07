import {routes} from './routes';
import {ApiService} from './services';

var app = angular.module('mainApp', ['ngRoute'])
    .config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/app/views/index.html"
    })
    .when("/artist", {
        templateUrl : "band-albums.htm"
    })
    .when("/results", {
        templateUrl : "results.html"
    })
    .when("/album", {
        templateUrl : "album-detail.html"
    });
	})
    .service('ApiService', ApiService)
    .controller("mainCtrl", function(){});
