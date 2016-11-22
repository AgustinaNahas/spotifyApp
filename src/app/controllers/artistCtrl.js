export function artistCtrl($scope, apiService, $routeParams) {
    $scope.artistCtrl = this;

    this.currentArtist = new Artist($routeParams.id, null, null, null, null);

    this.getArtist = function(){
    	if(this.currentArtist.id !== undefined && this.currentArtist.id !== 0 && this.currentArtist.id !== null){    		
	        apiService.getArtist(this.currentArtist.id)
	        .then(function successCallback(response) {
	        	var artist = response.data;
				this.currentArtist.name = artist.name;
				this.currentArtist.genres = artist.genres.join(', ');
				this.currentArtist.images = artist.images;
				this.getAlbums();
			}.bind(this), function errorCallback(response) {
				console.log(response);
			});
		} else {
			console.log(response);
    	}
    }.bind(this);

	this.getAlbums = function(){   		
	        apiService.getAlbums($scope.artistCtrl.currentArtist.id)
	        .then(function successCallback(response) {
	        	this.currentArtist.albums = response.data.items;
	        	this.currentArtist.albums.forEach(function(album){
	        		apiService.getAlbum(album.id)
        			.then(function successCallback(response) {
        				album.year = parseInt(response.data.release_date.substring(0, 4));
					}, function errorCallback(response) {
						console.log(response);
					});
	        	})
			}.bind(this), function errorCallback(response) {
				console.log(response);
			}.bind(this));
    }.bind(this);

    this.getArtist();

    this.albumsNotEmpty = function() {
    	return this.currentArtist.albums.length > 0;
    }.bind(this);
}