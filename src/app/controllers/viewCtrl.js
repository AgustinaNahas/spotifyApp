export function viewCtrl($scope, $location) {
    $scope.viewCtrl = this;

    this.changeView = function(route){
        $location.path(route);
    }
}