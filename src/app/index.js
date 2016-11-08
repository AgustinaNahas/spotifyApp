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
    .controller('mainCtrl', function($scope, Storage_Serv) {
        $scope.mainCtrl = this;

        this.favorite_list = [];
        // this.favorite_list.push(new Song('Pensar en nada', 'Los Piojos', 'Huracanes en Luna Plateada'));
        // this.favorite_list.push(new Song('Juntos', 'Pampa Yakuza', 'Naturaleza Revivir'));
        // this.favorite_list.push(new Song('Jose Sabía', 'La Vela Puerca', 'De Bichos y Flores'));
        
        this.has_favorites = function(){
            return this.favorite_list.length > 0;
        }.bind(this);

        this.add_favorite = function(title, artist, album){

            var fav_song = new Song(title, artist, album);
            var favorite_list = Storage_Serv.get('favorites');

            this.favorite_list.push(fav_song);
            Storage_Serv.set(favorite_list, 'favorites');

            this.favorite_list = Storage_Serv.get('favorites');
        }.bind(this);

        this.delete_favorite = function(title, artist, album){
            var favorite_list = Storage_Serv.get('favorites');
            var index = favorite_list.findIndex(song => (song.title == title && song.artist == artist));
            if (index != undefined) favorite_list.splice(index, 1);
            Storage_Serv.set(favorite_list, 'favorites');
            
            this.favorite_list = Storage_Serv.get('favorites');
        }.bind(this);

        this.changeView = function(route){
            $location.path(route);
        }

    })
    .service('Storage_Serv', function(){
        this.get = function(string) {
            var json_obj = localStorage.getItem(string);
            return JSON.parse(json_obj);
        };
        this.set = function(list, string){
            var json_obj = JSON.stringify(list);
            localStorage.setItem(string, json_obj);
        };
    });
