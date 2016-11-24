import {albumCtrl} from '../controllers';

export function trackDirective () {
	return {
		restrict: 'E',
		scope: {
			tracks: '=',
			index: '='
		},
		templateUrl: '/app/views/comp/track.html',
		controller: albumCtrl
	};
}