import {routes} from './routes';
import {apiService} from './services';
import {favCtrl} from './controllers';
import {viewCtrl} from './controllers';
import {searchCtrl} from './controllers';
import {storageServ} from './services';
import {favoriteServ} from './services';

var app = angular.module('mainApp', ['ngRoute'])
    .config(routes)
    .service('apiService', apiService)
    .controller('favCtrl', favCtrl)
    .controller('viewCtrl', viewCtrl)
    .controller('searchCtrl', searchCtrl)
    .service('storageServ', storageServ)
    .service('favoriteServ', favoriteServ)
