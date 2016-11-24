import {routes} from './routes';
import {apiService} from './services';
import {favCtrl} from './controllers';
import {artistCtrl} from './controllers';
import {albumCtrl} from './controllers';
import {searchCtrl} from './controllers';
import {viewCtrl} from './controllers';
import {storageServ} from './services';
import {favoriteServ} from './services';
import {playService} from './services';
import {favoriteSongDirective} from './directives';
import {myHeadingDirective} from './directives';
import {itemDirective} from './directives';
import {breadcrumbsDirective} from './directives';
import {mainItemDirective} from './directives';
import {trackDirective} from './directives';
import {cdDirective} from './directives';
import {starDirective} from './directives';

var app = angular.module('mainApp', ['ngRoute'])
    .config(routes)
    .service('apiService', apiService)
    .service('storageServ', storageServ)
    .service('favoriteServ', favoriteServ)
    .service('playService', playService)
    .controller('favCtrl', favCtrl)
    .controller('viewCtrl', viewCtrl)
    .controller('artistCtrl', artistCtrl)
    .controller('albumCtrl', albumCtrl)
    .controller('searchCtrl', searchCtrl)
    .directive('favoriteSong', favoriteSongDirective)
    .directive('myHeading', myHeadingDirective)
    .directive('item', itemDirective)
    .directive('breadcrumbs', breadcrumbsDirective)
    .directive('mainItem', mainItemDirective)
    .directive('track', trackDirective)
    .directive('cd', cdDirective)
    .directive('star', starDirective);
