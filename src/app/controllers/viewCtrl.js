export function viewCtrl($scope, $location, storageServ) {
    $scope.viewCtrl = this;

    this.changeView = function(route){
    	if($scope.viewCtrl.i_search) storageServ.setSearchString($scope.viewCtrl.i_search);
        $location.path(route);
    }
}