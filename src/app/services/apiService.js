export function apiService($http) {

	this.token;

	this.getResponse = function(searchField) {
		$http({
			method: 'GET',
			headers: {
				'Authorization': 'Bearer ' + this.token.access_token
			},
			url: 'https://api.spotify.com/v1/',
			data: "search?type=artist&q=" + searchField,
		}).then(function successCallback(response) {
			console.log(response)
		}, function errorCallback(response) {
			return response;
		});
	}.bind(this);

	this.authorize = function() {
		$http({
			method: 'GET',
			url: 'https://accounts.spotify.com/authorize',
			data: 'client_id=704304eb91764b3d9707dd31a7299592&response_type=token&redirect_uri=http://localhost:3000/results'
		}).then(function successCallback(response) {
			this.token = response;
		}, function errorCallback(response) {
			return response;
		});
	}.bind(this);
}
