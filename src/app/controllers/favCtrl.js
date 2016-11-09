export function favCtrl($scope, storageServ, favoriteServ) {
    $scope.favCtrl = this;

    this.favorite_list = function(){
        return favoriteServ.favorite_list;
    }

    this.has_favorites = function(){
        return favoriteServ.favorite_list.length > 0;
    };
}