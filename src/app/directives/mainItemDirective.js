export function mainItemDirective () {
	return {
		restrict: 'E',
		scope: {
			main: '=', 
			album: '='
		},
		templateUrl: '/app/views/comp/main-item.html',
	};
}