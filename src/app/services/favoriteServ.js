export function favoriteServ(){
    this.favoriteList = [];

    this.favoriteList.push(new Song('Pensar en nada', 'Los Piojos', 'Huracanes en Luna Plateada'));
    this.favoriteList.push(new Song('Juntos', 'Pampa Yakuza', 'Naturaleza Revivir'));
    this.favoriteList.push(new Song('Jose Sabía', 'La Vela Puerca', 'De Bichos y Flores'));

    this.addFavorite = function(title, artist, album){
        var fav_song = new Song(title, artist, album);
        var favoriteList = storageServ.get('favorites');

        this.favoriteList.push(fav_song);
        storageServ.set(favoriteList, 'favorites');

        this.favoriteList = storageServ.get('favorites');
    }.bind(this);

    this.deleteFavorite = function(title, artist, album){
        var favoriteList = storageServ.get('favorites');
        var index = favoriteList.findIndex(song => (song.title == title && song.artist == artist && song.album == album));

        if (index != undefined) favoriteList.splice(index, 1);
        storageServ.set(favoriteList, 'favorites');
        
        this.favoriteList = storageServ.get('favorites');
    }.bind(this);
}