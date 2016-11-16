export function albumCtrl($scope, apiService, $routeParams, favoriteServ, storageServ) {
    $scope.albumCtrl = this;
    this.trackPlaying = new Audio("");

	this.getAlbum = function(){   		
	        apiService.getAlbum($scope.albumCtrl.currentAlbum.id)
	        .then(function successCallback(response) {
	        	$scope.albumCtrl.currentAlbum = response.data;
	        	$scope.albumCtrl.currentAlbum.year = parseInt(response.data.release_date.substring(0, 4));
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

	this.addTrackToFavorite = function(id){
		favoriteServ.addFavorite(id);
	}
    
    this.currentAlbum = new Album($routeParams.id, null, null, null, null);
    this.getAlbum();
}