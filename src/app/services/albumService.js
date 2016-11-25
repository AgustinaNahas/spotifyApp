export function albumService(){

	this.getAlbum = 
        apiService.getAlbum(this.currentAlbum.id)
        .then(function successCallback(response) {
        	this.currentAlbum = response.data;
        	this.currentAlbum.year = parseInt(response.data.release_date.substring(0, 4));
        	this.currentAlbum.tracks.items.forEach(this.checkFavorite);
        	this.currentAlbum.CDs = this.manageTrack(this.currentAlbum.tracks.items);
		}.bind(this), function errorCallback(response) {
			console.log(response);
		});