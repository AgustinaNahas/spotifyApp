export function favoriteServ(storageServ, apiService){
    this.favorites = [];

    this.addFavorite = function(track){
        //var auxList = [];
        var auxList = storageServ.getFavorites();
        if(!auxList) auxList = [];

        auxList.push(track);

        storageServ.setFavorites(auxList);

        this.favorites = auxList;
    }.bind(this);

    this.deleteFavorite = function(trackId){
        var auxList = storageServ.getFavorites();
        if(!auxList) auxList = [];
        var index = auxList.findIndex(track => (track.id === trackId));

        if (index !== -1) auxList.splice(index, 1);
        storageServ.setFavorites(auxList);
        
        this.favorites = auxList;
    }.bind(this);

    this.isFavorite = function(trackId){
        var auxList = storageServ.getFavorites();
        var index = auxList.findIndex(track => (track.id === trackId));

        return (index !== -1);
    }

}