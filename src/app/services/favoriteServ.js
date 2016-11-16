export function favoriteServ(storageServ, apiService){
    this.favorites = [];

    this.addFavorite = function(id){
        // var auxList = [];
        var auxList = storageServ.getFavorites();
        if(!auxList) auxList = [];

        auxList.push(id);

        storageServ.setFavorites(auxList);

        storageServ.seeFavorites().forEach(this.getTrack);
    }.bind(this);

    this.deleteFavorite = function(id){
        var auxList = storageServ.get('favorites');
        var index = auxList.findIndex(song => (song === id));

        if (index !== undefined) auxList.splice(index, 1);
        storageServ.set(auxList, 'favorites');
        
        storageServ.get('favorites').forEach(this.getTrack);
    }.bind(this);

    this.getTrack = function(trackId){
        apiService.getTrack(trackId)
        .then(function successCallback(response) {
            this.favorites.push(response.data);
        }.bind(this), function errorCallback(response) {
            console.log("Bad. -> " + response);
        });
    }.bind(this);

    this.seeFavorites = function(){
        storageServ.getFavorites().forEach(this.getTrack);
        while(storageServ.seeFavorites().legth > this.favorites.length)
    }.bind(this);

}