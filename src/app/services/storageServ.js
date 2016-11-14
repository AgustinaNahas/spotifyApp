export function storageServ(){
    this.get = function(string) {
        var jsonObj = localStorage.getItem(string);
        return JSON.parse(jsonObj);
    };
    this.set = function(list, string){
        var jsonObj = JSON.stringify(list);
        localStorage.setItem(string, jsonObj);
    };
    this.pop = function(string){
    	localStorage.removeItem(string);
    }

    this.putS = function(string, key){
        localStorage.setItem(key, string);
    };

    this.getS = function(key){
        return localStorage.getItem(key);
    };
}