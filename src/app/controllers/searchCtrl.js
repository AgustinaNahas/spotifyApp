export function searchCtrl($scope, apiService) {
    $scope.searchCtrl = this;
    this.resultsList = [];

    this.search = function(){
    	if(this.stringSearch !== ""){    		
	        apiService.getResponse(this.stringSearch)
	        .then(function successCallback(response) {
				this.resultsList = response.data.artists.items;
			}.bind(this), function errorCallback(response) {
				console.log(response);
				this.resultsList = [];
			}.bind(this));
    	} else {
    		this.resultsList = [];
    	}
    }.bind(this);

    this.resultsNotEmpty = function(){
    	return ($scope.searchCtrl.resultsList.length > 0);
    }
}