// import the Media class:
const Media = require ('./Media.js')
// create your Music class:
class Music extends Media {
    constructor(title, genre, year, artist, length) {
        super(title, genre, year);
        this.artist = artist;
        this.length = length;
    }

    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length}`;
    }

    static shortestAlbum(musics) {
        let shortestSongLength = musics[0].length;
        let shortestSong = musics[0];
        for (let x = 0; x <= musics.length -1; x++)
        {
            if (musics[x].length < shortestSongLength)
            {
                shortestSongLength = musics[x].length;
                shortestSong = musics[x];
            }
        }
        return shortestSong;
    }
}
// don't change below
module.exports = Music;
