// import the Media class:
const Media = require('./Media.js');
// create your Book class:
class Book extends Media {
    constructor(title,year,genre,author, numPages, rating){
        super(title,year,genre)
        this.author=author;
        this.numPages=numPages;
        this.rating=rating
    }
    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    static highestRating(book){
            let highestRating = book[0];
            for(let i = 0; i <= book.length - 1; i++){
                if(book[i].rating > highestRating.rating){
                    highestRating = book[i];
                }
            }
            return highestRating;
    }
}
// don't change below
module.exports = Book;
