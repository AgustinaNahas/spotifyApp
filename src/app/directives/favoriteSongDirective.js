export function favoriteSongDirective () {
	return {
		restrict: 'E',
		scope: {
			tracks: '='
		},
		templateUrl: '/app/views/comp/favorite-song.html'
	};
}