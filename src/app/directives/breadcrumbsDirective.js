export function breadcrumbsDirective () {
	return {
		restrict: 'E',
		scope: {
			results: '=',
			artist: '=', 
			album: '='
		},
		templateUrl: '/app/views/comp/breadcrumbs.html'
	};
}