export function artistDirective () {
	return {
		restrict: 'E',
		scope: {
			list: '='
		},
		templateUrl: '/app/views/comp/artist.html'
	};
}