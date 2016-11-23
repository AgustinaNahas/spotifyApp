import {albumCtrl} from '../controllers';

export function starDirective () {
	return {
		restrict: 'E',
		scope: {
			track: '='
		},
		templateUrl: '/app/views/comp/star.html',
		controller: albumCtrl
	};
}