export function apiService($http) {

	this.token;

	this.getResults = function(searchField) {
		return $http({
			method: 'GET',
			url: 'https://api.spotify.com/v1/search?type=artist&q=' + searchField,
		})
	};

	this.getArtist = function(id) {
		return $http({
			method: 'GET',
			url: 'https://api.spotify.com/v1/artists/' + id,
		})
	};


}
