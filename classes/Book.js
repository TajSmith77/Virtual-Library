// import the Media class:
require ('./Media')
// create your Book class:
class Book extends Media {
    constructor(title,year,genre,author, numPages, rating){
        super(title,year,genre)
        this.author=author;
        this.numPages=numPages;
        this.rating=rating
    }
    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating} `
    }
    static highestRating(Book){
            let highestRating = book[0];
            for(let i = 1; i < book.length; i++){
                if(book.highestRating > highestRating.rating){
                    return highestRating= book[i];
                }
            }
            return highestRating
    }
}
// don't change below
module.exports = Book;
