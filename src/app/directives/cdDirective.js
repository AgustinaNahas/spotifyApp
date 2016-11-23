import {albumCtrl} from '../controllers';

export function cdDirective () {
	return {
		restrict: 'E',
		scope: {
			cds: '=',
			show: '='
		},
		templateUrl: '/app/views/comp/cd.html',
		controller: albumCtrl
	};
}