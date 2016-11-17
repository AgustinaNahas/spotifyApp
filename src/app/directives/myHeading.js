export function myHeading () {
	return {
		restrict: 'E',
		scope: {
			showBar: '='
		},
		templateUrl: '/app/views/comp/my-heading.html'
	};
}