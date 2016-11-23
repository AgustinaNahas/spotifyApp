export function albumCtrl($scope, apiService, $routeParams, favoriteServ, storageServ) {
    $scope.albumCtrl = this;
    this.trackPlaying = new Audio("");
    
	this.getAlbum = function(){	
        apiService.getAlbum(this.currentAlbum.id)
        .then(function successCallback(response) {
        	this.currentAlbum = response.data;
        	this.currentAlbum.year = parseInt(response.data.release_date.substring(0, 4));
        	this.currentAlbum.tracks.items.forEach(this.checkFavorite);
        	this.currentAlbum.CDs = this.manageTrack(this.currentAlbum.tracks.items);
		}.bind(this), function errorCallback(response) {
			console.log(response);
		});
    }.bind(this);

    this.tracksNotEmpty = function() {
    	return this.currentAlbum.tracks.items.length > 0;
    }.bind(this);

    this.playTrack = function(url) {
    	if(this.trackPlaying.src !== url || this.trackPlaying.paused ){
    		this.trackPlaying.pause();
			this.trackPlaying = new Audio(url);
			this.trackPlaying.play();
    	} else {
    		this.trackPlaying.pause();
    	}
	}.bind(this);

	this.manageFavorite = function(track){
		if(favoriteServ.isFavorite(track.id)){
			favoriteServ.deleteFavorite(track.id);
			track.favorite = false;
		} else {
			track.image = this.currentAlbum.images[0];
			track.album = this.currentAlbum.name;
			favoriteServ.addFavorite(track);
			track.favorite = true;
		}
	}.bind(this);

	this.manageTrack = function(tracks){
		var cdNum = 0;
		var CDs = [];
		tracks.forEach(function(track){
			cdNum = parseInt(track.disc_number);
			if (CDs[cdNum-1] === undefined) CDs[cdNum-1] = [];
			CDs[cdNum-1].push(track);
		});
		return CDs;
	}

	this.checkFavorite = function(track){
		track.favorite = favoriteServ.isFavorite(track.id);
	}

	this.$onDestroy = function () {
		this.trackPlaying.pause();
	}.bind(this);
    
    this.currentAlbum = new Album($routeParams.id, null, null, null, null);
    this.getAlbum();
}