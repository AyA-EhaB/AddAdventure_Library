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
function display() {
  let BookList = [];
  for (let i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var keyvalue = localStorage.getItem(key);
    let book = JSON.parse(keyvalue);
    if (book) {
      if (book.isbook) {
        BookList.push(book);
      }

    }
  }
  console.log(BookList);

  let librarybooks = document.getElementById("library-books");
  librarybooks.innerHTML = "";
  for (let i = 0; i < BookList.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `
        <table>
        <tr>
          <td rowspan="8"><img src="${BookList[i].imageurl}" width="300px" alt="Book Image"></td>
          <td><strong>Title:</strong></td>
          <td>${BookList[i].bookname}</td>
        </tr>
        <tr>
          <td><strong>Author:</strong></td>
          <td>${BookList[i].author}</td>
        </tr>
        <tr>
          <td><strong>Category:</strong></td>
          <td>${BookList[i].category}</td>
        </tr>
        <tr>
          <td><strong>Publisher:</strong></td>
          <td>${BookList[i].publisher}</td>
        </tr>
        <tr>
          <td><strong>Publication Date:</strong></td>
          <td>${BookList[i].publicationDate}</td>
        </tr>
        <tr>
          <td><strong>Number of Pages:</strong></td>
          <td>${BookList[i].numberOfPages}</td>
        </tr>
        <tr>
          <td><strong>Description:</strong></td>
          <td colspan="2">${BookList[i].description}</td>
        </tr>
        <tr>
          <td colspan="3">
            <button onclick="editBook(${BookList[i].bookId})" class="but">Edit</button>
            <button onclick="DeleteBook(${i});" class="but">Delete</button>
          </td>
        </tr>
      </table>
        `;
    librarybooks.appendChild(li);
  }
}

function editBook(i) {
  window.localStorage.setItem("bookDetails", i);
  window.location.href = "Edit.html";

}

function DeleteBook(i) {
  localStorage.removeItem(localStorage.key(i));
  window.location.reload();
}

display();
