export function favCtrl($scope, storageServ, favoriteServ) {
    $scope.favCtrl = this;
	favoriteServ.seeFavorites();

	this.favorites = favoriteServ.favorites;

    this.has_favorites = function(){
    	favoriteServ.seeFavorites();
        return favoriteServ.favorites.length > 0;
    };
}