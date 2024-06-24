function Book(imageurl, bookname, author, category, publisher, publicationDate, numberOfPages, description, isbook) {
    this.bookId = Book.incrementID();
    this.imageurl = imageurl;
    this.bookname = bookname;
    this.author = author;
    this.category = category;
    this.publisher = publisher;
    this.publicationDate = publicationDate;
    this.numberOfPages = numberOfPages;
    this.description = description;
    this.isbook = true;
}

Book.prototype.set_book_name = function (name) {
    this.bookname = name;
}

let min = 10;
let max = 1000;
let id = Math.floor(Math.random() * (max - min)) + min;
Book.incrementID = (function () {

    return function () {
        return id;
    };
})();
function Add_book() {
    var imgagenewURL = JSON.parse(localStorage.getItem("imageURL"));
    var imageurl = imgagenewURL;
    var bookname = document.getElementById("bookname_newbook").value;
    var author = document.getElementById("Author_newbook").value;
    var category = document.getElementById("Category_newbook").value;
    var publisher = document.getElementById("Publisher_newbook").value;
    var publicationDate = document.getElementById("PublicationDate_newbook").value;
    var numberOfPages = document.getElementById("NumberofPages_newbook").value;
    var description = document.getElementById("Description_newbook").value;

    let newbook = new Book(imageurl, bookname, author, category, publisher,
        publicationDate, numberOfPages, description);

    window.localStorage.setItem("book" + id, JSON.stringify(newbook));
    alert("Book Added");
}
