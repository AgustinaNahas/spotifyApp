export function albumCtrl($scope, apiService, $routeParams, favoriteServ, storageServ) {
    $scope.albumCtrl = this;
    this.trackPlaying = new Audio("");

	this.getAlbum = function(){   		
	        apiService.getAlbum($scope.albumCtrl.currentAlbum.id)
	        .then(function successCallback(response) {
	        	$scope.albumCtrl.currentAlbum = response.data;
	        	$scope.albumCtrl.currentAlbum.year = parseInt(response.data.release_date.substring(0, 4));
	        	$scope.albumCtrl.currentAlbum.tracks.items.forEach($scope.albumCtrl.checkFavorite);
			}, function errorCallback(response) {
				console.log(response);
			});
    };

    this.tracksNotEmpty = function() {
    	return $scope.albumCtrl.currentAlbum.tracks.items.length > 0;
    };

    this.playTrack = function(url) {
    	if($scope.albumCtrl.trackPlaying.src !== url || $scope.albumCtrl.trackPlaying.paused ){
    		$scope.albumCtrl.trackPlaying.pause();
			$scope.albumCtrl.trackPlaying = new Audio(url);
			$scope.albumCtrl.trackPlaying.play();
    	} else {
    		$scope.albumCtrl.trackPlaying.pause();
    	}
	};

	this.addTrackToFavorite = function(track){
		track.image = $scope.albumCtrl.currentAlbum.images[0];
		track.album = $scope.albumCtrl.currentAlbum.name;
		favoriteServ.addFavorite(track);
	}

	this.checkFavorite = function(track){
		track.favorite = favoriteServ.isFavorite(track.id);
	}
    
    this.currentAlbum = new Album($routeParams.id, null, null, null, null);
    this.getAlbum();

	this.$onDestroy = function () {
		$scope.albumCtrl.trackPlaying.pause();
	};
}