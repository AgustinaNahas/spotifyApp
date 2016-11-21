import {viewCtrl} from '../controllers';

export function myHeadingDirective () {
	return {
		restrict: 'E',
		templateUrl: '/app/views/comp/my-heading.html',
		scope:{
			showBar: "@"
		},
		controller: viewCtrl
	};
}