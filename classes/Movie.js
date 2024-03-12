// import the Media class:
const Media = require('./Media.js');
// create your Movie class:
class Movie extends Media {
    constructor(title, year, genre, director, duration, rating) {
        super(title, year, genre);
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }
    summary() {
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    static longestMovie(movie) {
        let longestDuration = movie[0];

        for (let i = 1; i < movie.length; i++) {
            if (movie[i].duration > longestDuration.duration) {
                longestDuration = movie[i]
            }
        }
        return longestDuration
    }
}
// don't change below
module.exports = Movie;