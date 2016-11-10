export function favoriteServ(){
    this.favoriteList = [];

    this.favoriteList.push(new Song('Pensar en nada', 'Los Piojos', 'Huracanes en Luna Plateada', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Pensar_en_nada_Le%C3%B3n_Gieco_1981.jpg/200px-Pensar_en_nada_Le%C3%B3n_Gieco_1981.jpg'));
    this.favoriteList.push(new Song('Juntos', 'Pampa Yakuza', 'Naturaleza Revivir', 'http://www.cmtv.com.ar/tapas-cd/pampaunico.jpg'));
    this.favoriteList.push(new Song('Jose Sabía', 'La Vela Puerca', 'De Bichos y Flores', 'http://www.velapuerca.com/media/uploads/covers/cd02_01.jpg'));

    this.addFavorite = function(title, artist, album, img){
        var fav_song = new Song(title, artist, album, img);
        var favoriteList = storageServ.get('favorites');

        this.favoriteList.push(fav_song);
        storageServ.set(favoriteList, 'favorites');

        this.favoriteList = storageServ.get('favorites');
    }.bind(this);

    this.deleteFavorite = function(title, artist, album, img){
        var favoriteList = storageServ.get('favorites');
        var index = favoriteList.findIndex(song => (song.title == title && song.artist == artist && song.album == album));

        if (index != undefined) favoriteList.splice(index, 1);
        storageServ.set(favoriteList, 'favorites');
        
        this.favoriteList = storageServ.get('favorites');
    }.bind(this);
}