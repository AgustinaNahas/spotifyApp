export function favCtrl($scope, storageServ, favoriteServ) {
    $scope.favCtrl = this;

    this.favorites = [];

    this.getFavorites = function (){
    	$scope.favCtrl.favorites = storageServ.getFavorites();
    }

    this.hasFavorites = function(){
        return $scope.favCtrl.favorites.length > 0;
    };

    this.manageFavorite = function(id, tracks){
		favoriteServ.deleteFavorite(id);
		var index = tracks.findIndex(track => (track.id === id));
        if (index !== -1) tracks.splice(index, 1);
	}.bind(this);

    this.getFavorites();
}