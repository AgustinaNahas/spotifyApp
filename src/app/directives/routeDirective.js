export function routeDirective () {
	return {
		restrict: 'E',
		scope: {
			results: '=',
			artist: '=', 
			album: '='
		},
		templateUrl: '/app/views/comp/route.html'
	};
}