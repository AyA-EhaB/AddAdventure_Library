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

Book.incrementID = (function () {
    let id = 0;
    return function () {
        return ++id;
    };
})();

let book1 = new Book("https://i.ebayimg.com/images/g/sHYAAOSwZDtlyNdy/s-l1600.jpg",
    "Ar-Raheeq Al-Makhtum", "Shaykh Safi-ur-Rahman al-Mubarakpuri", "Religious",
    "Darussalam", "First published in 1979, various editions",
    "Various editions, typically around 500-600 pages",
    "Ar-Raheeq Al-Makhtum (THE SEALED NECTAR) is a book that provides a biography of the Prophet Muhammad (peace be upon him). It is a comprehensive account of his life and teachings.");

let book3 = new Book("https://media.shortform.com/covers/png/atomic-habits-cover@8x.png",
    "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    "James Clear", "Psychology, Biology, and Neuroscience",
    "Avery", "October 16, 2018", "320",
    "Atomic Habits offers a proven framework for improving every day. Clear reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.");

let book4 = new Book("https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1172144886i/142785.jpg",
    "Object-Oriented Software Engineering", "Bernd Bruegge, Allen H. Dutoit",
    "Technology", "Addison-Wesley Professional", "February 24, 2004",
    "752", "Object-Oriented Software Engineering: Using UML, Patterns and Java is a comprehensive guide to building and maintaining large, complex software systems.It covers essential skills, methods, and technologies needed for successful software development.");

let book5 = new Book("https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1556345491i/41812831.jpg", "The Hundred Years' War on Palestine",
    "Rashid Khalidi", "History", "Metropolitan Books", "May 14, 2019", "336",
    "The Hundred Years' War on Palestine: A History of Settler-Colonial Conquest and Resistance, 1917 - 2017 is a book by Rashid Khalidi that examines the history of Palestine from 1917 to 2017, focusing osettler - colonial  conquest and resistance.");

let book6 = new Book("https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg", "Thinking, Fast and Slow",
    "Daniel Kahneman", "Psychology", "Farrar, Straus and Giroux",
    "October 25, 2011", "499", "Thinking, Fast and Slow is a book by Daniel Kahneman that explores the two systems that drive the way we think: the fast, intuitive System 1 and the slow, deliberate System 2.");


let book7 = new Book("https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1492677644i/25899336.jpg", "When Breath Becomes Air",
    "Paul Kalanithi", "Autobiography", "Random House (US)&Bodley Head (UK)", "January 12, 2016", "228",
    ">When Breath Becomes Air is a memoir by Paul Kalanithi. It recounts Kalanithi's life and his battle with terminal cancer, as well as his exploration of what gives life meaning in the face of death.");
function ADD_books() {
    window.localStorage.setItem("book1", JSON.stringify(book1));
    window.localStorage.setItem("book2", JSON.stringify(book3));
    window.localStorage.setItem("book3", JSON.stringify(book4));
    window.localStorage.setItem("book4", JSON.stringify(book5));
    window.localStorage.setItem("book5", JSON.stringify(book6));
    window.localStorage.setItem("book6", JSON.stringify(book7));


    alert("books Added ");


}
for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.getItem(localStorage.key(i)));
}
function clearbooks() {
    localStorage.clear();
    alert("Clear done");
}

