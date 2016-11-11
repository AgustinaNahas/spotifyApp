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
}