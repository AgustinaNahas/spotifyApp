export function favoriteServ(storageServ){
    this.favoriteList = [];

    this.addFavorite = function(song){
        var favoriteList = storageServ.get('favorites');

        this.favoriteList.push(song);
        storageServ.set(favoriteList, 'favorites');

        this.favoriteList = storageServ.get('favorites');
    }.bind(this);

    this.deleteFavorite = function(id){
        var favoriteList = storageServ.get('favorites');
        var index = favoriteList.findIndex(song => (song.id == id));

        if (index != undefined) favoriteList.splice(index, 1);
        storageServ.set(favoriteList, 'favorites');
        
        this.favoriteList = storageServ.get('favorites');
    }.bind(this);
}