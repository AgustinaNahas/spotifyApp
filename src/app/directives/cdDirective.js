import {albumCtrl} from '../controllers';

export function cdDirective () {
	return {
		restrict: 'E',
		scope: {
			cds: '=',
			criterio:'=',
			orden:'='
		},
		templateUrl: '/app/views/comp/cd.html',
		controller: albumCtrl
	};
}