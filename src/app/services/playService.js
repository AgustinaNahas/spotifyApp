export function playService(){

    this.trackPlaying = new Audio("");

    this.play = function(url){
        if(this.trackPlaying.src !== url || this.trackPlaying.paused ){
            this.trackPlaying.pause();
            this.trackPlaying = new Audio(url);
            this.trackPlaying.play();
        }
    }.bind(this);

    this.pause = function(url){
        if (!this.trackPlaying.paused && this.trackPlaying.src === url) this.trackPlaying.pause();
    }.bind(this);

}