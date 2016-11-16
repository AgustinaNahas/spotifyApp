export function apiService($http) {

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

	this.getAlbums = function(id) {
		return $http({
			method: 'GET',
			url: 'https://api.spotify.com/v1/artists/' + id + '/albums',
		})
	};
	
	this.getAlbum = function(id) {
		return $http({
			method: 'GET',
			url: 'https://api.spotify.com/v1/albums/' + id,
		})
	};

	this.getTrack = function (id) {
		return $http({
			method: 'GET',
			url: 'https://api.spotify.com/v1/tracks/' + id,
		})
	}


}
