export function itemDirective () {
	return {
		restrict: 'E',
		scope: {
			list: '=', 
			showYear: '=',
			type: '='
		},
		templateUrl: '/app/views/comp/item.html'
	};
}