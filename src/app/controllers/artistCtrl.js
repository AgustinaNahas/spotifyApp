export function artistCtrl($scope, apiService, $routeParams) {
    $scope.artistCtrl = this;

    this.currentArtist = new Artist($routeParams.id, null, null, null, null);

    this.getArtist = function(){
    	if($scope.artistCtrl.currentArtist.id !== undefined && $scope.artistCtrl.currentArtist.id !== 0 && $scope.artistCtrl.currentArtist.id !== null){    		
	        apiService.getArtist($scope.artistCtrl.currentArtist.id)
	        .then(function successCallback(response) {
	        	var a = response.data;
				$scope.artistCtrl.currentArtist.name = a.name;
				$scope.artistCtrl.currentArtist.genres = a.genres.join(', ');
				$scope.artistCtrl.currentArtist.imgs = a.images;
				$scope.artistCtrl.getAlbums();

			}, function errorCallback(response) {
				console.log(response);
			});
		} else {
			console.log(response);
    	}
    };

	this.getAlbums = function(){   		
	        apiService.getAlbums($scope.artistCtrl.currentArtist.id)
	        .then(function successCallback(response) {
	        	$scope.artistCtrl.currentArtist.albums = response.data.items;
	        	console.log($scope.artistCtrl.currentArtist.albums);
			}, function errorCallback(response) {
				console.log(response);
			});
    };

    this.getArtist();

    this.albumsNotEmpty = function() {
    	return $scope.artistCtrl.currentArtist.albums.length > 0;
    }
}