import {routes} from './routes';
import {apiService} from './services';
import {favCtrl} from './controllers';
import {viewCtrl} from './controllers';
import {artistCtrl} from './controllers';
import {albumCtrl} from './controllers';
import {searchCtrl} from './controllers';
import {storageServ} from './services';
import {favoriteServ} from './services';
import {favoriteSongDirective} from './directives';
import {myHeadingDirective} from './directives';
import {myHeadingBarDirective} from './directives';
import {artistDirective} from './directives';

var app = angular.module('mainApp', ['ngRoute'])
    .config(routes)
    .service('apiService', apiService)
    .service('storageServ', storageServ)
    .service('favoriteServ', favoriteServ)
    .controller('favCtrl', favCtrl)
    .controller('viewCtrl', viewCtrl)
    .controller('artistCtrl', artistCtrl)
    .controller('albumCtrl', albumCtrl)
    .controller('searchCtrl', searchCtrl)
    .directive('favoriteSong', favoriteSongDirective)
    .directive('myHeading', myHeadingDirective)
    .directive('myHeadingBar', myHeadingBarDirective)
    .directive('artist', artistDirective);
