export function storageServ(){

    this.pop = function(key){
    	localStorage.removeItem(key);
    }

    this.setSearchString = function(string){
        localStorage.searchString = string;
    };

    this.getSearchString = function(){
        return localStorage.searchString;
    };

    this.setFavorites = function(list){
        var jsonObj = JSON.stringify(list);
        localStorage.favorites = jsonObj;
    };

    this.getFavorites = function(){
        var jsonObj = localStorage.favorites;
        if (jsonObj !== undefined) return JSON.parse(jsonObj);
        else return [];
    }

}