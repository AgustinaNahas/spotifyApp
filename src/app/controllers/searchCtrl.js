export function searchCtrl($scope, apiService, storageServ) {
    $scope.searchCtrl = this;
    this.resultsList = [];

    this.stringSearch = storageServ.getS('searchString');

    this.search = function(){
        if(this.stringSearch !== ""){           
            apiService.getResults(this.stringSearch)
            .then(function successCallback(response) {
                this.resultsList = response.data.artists.items;
                storageServ.pop('searchString');
                storageServ.putS(this.stringSearch, 'searchString');
            }.bind(this), function errorCallback(response) {
                console.log(response);
                this.resultsList = [];
            }.bind(this));
        } else {
            this.resultsList = [];
        }
    }.bind(this);
    this.search();

    this.resultsNotEmpty = function(){
    	return ($scope.searchCtrl.resultsList.length > 0);
    }

    this.changeView = function(route){
        $location.path(route);
    }
}