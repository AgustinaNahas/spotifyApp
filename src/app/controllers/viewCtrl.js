export function viewCtrl($scope, $location, storageServ) {
    $scope.viewCtrl = this;

    this.changeView = function(route){
    	storageServ.pop('searchString');
    	storageServ.putS($scope.viewCtrl.i_search, 'searchString');
        $location.path(route);
    }
}