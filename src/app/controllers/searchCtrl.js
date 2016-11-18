export function searchCtrl($scope, apiService, storageServ) {
    $scope.searchCtrl = this;
    this.resultsList = [];

    this.stringSearch = storageServ.getSearchString();

    this.search = function(){
        if(this.stringSearch !== ""){           
            apiService.getResults(this.stringSearch)
            .then(function successCallback(response) {
                this.resultsList = response.data.artists.items;
                storageServ.setSearchString(this.stringSearch);
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
    	return (this.resultsList.length > 0);
    }.bind(this);

    this.changeView = function(route){
        if(this.stringSearch) storageServ.setSearchString(this.stringSearch);
        $location.path(route);
    }.bind(this);
}