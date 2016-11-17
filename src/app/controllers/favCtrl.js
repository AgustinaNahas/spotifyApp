export function favCtrl($scope, storageServ, favoriteServ) {
    $scope.favCtrl = this;

    this.favorites = [];

    this.getFavorites = function (){
    	$scope.favCtrl.favorites = storageServ.getFavorites();
    }

    this.hasFavorites = function(){
        return $scope.favCtrl.favorites.length > 0;
    };

    this.getFavorites();
}