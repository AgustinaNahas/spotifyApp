export function myHeadingDirective () {
	return {
		restrict: 'E',
		templateUrl: '/app/views/comp/my-heading.html',
		scope:{
			showBar: "="
		}
	};
}