export function albumCtrl($scope, apiService, $routeParams, favoriteServ, storageServ, playService) {
    $scope.albumCtrl = this;
    this.orden = [];
    this.criterio = [];
    
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

    this.visibleCDs = [];

    this.showHideCD = function(CDindex){
    	if (this.visibleCDs[CDindex] !== undefined) this.visibleCDs[CDindex] = ! (this.visibleCDs[CDindex])
    	else this.visibleCDs[CDindex] = true;
    }.bind(this);

    this.tracksNotEmpty = function() {
    	return this.currentAlbum.tracks.items.length > 0;
    }.bind(this);

    this.playTrack = function(url) {
    	playService.play(url);
	}

	this.pauseTrack = function(url){
		playService.pause(url);
	}

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
			this.criterio.push("track_number");
			this.orden.push(false);
		}.bind(this));
		return CDs;
	}.bind(this);

	this.checkFavorite = function(track){
		track.favorite = favoriteServ.isFavorite(track.id);
	}

	this.$onDestroy = function () {
		this.trackPlaying.pause();
	}.bind(this);

	this.changeCriteria = function(index){
		if (this.criterio[index] == "track_number") this.criterio[index] = "duration_ms"
		else this.criterio[index] = "track_number";
	}.bind(this);

	this.changeOrder = function(index){
		console.log(this.orden[index]);
		this.orden[index] = !this.orden[index]
	}.bind(this);

    this.currentAlbum = new Album($routeParams.id, null, null, null, null);
    this.getAlbum();

}