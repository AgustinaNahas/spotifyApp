export function albumCtrl($scope, apiService, $routeParams) {
    $scope.albumCtrl = this;

    this.currentAlbum = new Album($routeParams.id, null, null, null, null);
    console.log(this.currentAlbum);

	this.getAlbum = function(){   		
	        apiService.getAlbum($scope.albumCtrl.currentAlbum.id)
	        .then(function successCallback(response) {
	        	$scope.albumCtrl.currentAlbum.artists = response.data.artists;
	        	$scope.albumCtrl.currentAlbum.imgs = response.data.images;
	        	$scope.albumCtrl.currentAlbum.name = response.data.name;
	        	$scope.albumCtrl.currentAlbum.year = parseInt(response.data.release_date.substring(0, 4));
			}, function errorCallback(response) {
				console.log(response);
			});
    };

    this.getAlbum();

    this.albumsNotEmpty = function() {
    	return $scope.albumCtrl.currentAlbum.cd.length > 0;
    }
}