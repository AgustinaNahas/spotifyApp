export function favCtrl($scope, storageServ, favoriteServ) {
    $scope.favCtrl = this;

    this.favorite_list = function(){
        return favoriteServ.favoriteList;
    }

    this.has_favorites = function(){
        return favoriteServ.favoriteList.length > 0;
    };
}