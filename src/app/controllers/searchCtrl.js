export function searchCtrl($scope, apiService) {
    $scope.searchCtrl = this;

    apiService.authorize();

    this.search = function(){
        this.resultsList = apiService.getResponse(this.stringSearch);
    }.bind(this);
}