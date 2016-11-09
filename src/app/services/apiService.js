export function apiService($http) {

	this.token;

	this.getResponse = function(searchField) {
		return $http({
			method: 'GET',
			url: 'https://api.spotify.com/v1/search?type=artist&q=' + searchField,
		})
	};

}
