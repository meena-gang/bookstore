function Author(name, birthYear, nationality){
    this.name = name,
    this.birthYear = birthYear,
    this.nationality = nationality
}

function Book(title, author, genre, price){
    this.title = title,
    this.author = author,
    this.genre = genre,
    this.price = price,
    this.getBookInfo = function(){
       console.log(this.title, this.author.name ,this.genre, this.price);
    }
}

let author1 = new Author("meena", 1995, "India");
let book1 = new Book("maths", author1, "Finance", 500);
book1.getBookInfo();
let author2 = new Author("saurabh", 1996, "India");
let book2 = new Book("physics",author2,"research",600);
book2.getBookInfo();
let author3 = new Author("agarwal", 1990, "India");
let book3 = new Book("chemistry",author3,"research",700);
book3.getBookInfo();
