export function artistCtrl($scope, apiService) {
    $scope.artistCtrl = this;

    this.idArtist;

    this.selectedArtist = function(idArtist){
        $scope.artistCtrl.idArtist = idArtist;
    }

    this.getArtist = function(){
    	if(this.idArtist !== undefined && this.idArtist !== 0){    		
	        apiService.getArtist(this.idArtist)
	        .then(function successCallback(response) {
				console.log(response);
			}, function errorCallback(response) {
				console.log(response);
				this.resultsList = [];
			}.bind(this));
		} else {
    		console.log('NADA POR AQUI');
    	}
    }.bind(this);
}