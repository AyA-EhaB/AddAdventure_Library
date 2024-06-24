// function loadBookData(bookId) {
//     var bookData = localStorage.getItem("book" + bookId);
//     if (bookData) {
//         var parsedBookData = JSON.parse(bookData);
//         document.getElementById("bookname").innerText = parsedBookData.name;
//         document.getElementById("Author").innerText = parsedBookData.author;
//         document.getElementById("Category").innerText = parsedBookData.category;
//         document.getElementById("Publisher").innerText = parsedBookData.publisher;
//         document.getElementById("PublicationDate").innerText = parsedBookData.publicationDate;
//         document.getElementById("NumberofPages").innerText = parsedBookData.numberOfPages;
//         document.getElementById("Description").innerText = parsedBookData.description;
//     }
//     // else {
//     //     alert("Book data not found!");
//     // }
// }
// function edit_click(element) {
//     var bookId = element.getAttribute("id");
//     localStorage.setItem("bookId", bookId);

//     var bookname = document.getElementById("bookname").innerHTML;
//     localStorage.setItem("StoreName", bookname);

//     var author = document.getElementById("Author").innerHTML;
//     localStorage.setItem("Author", author);

//     var Category = document.getElementById("Category").innerHTML;
//     localStorage.setItem("Category", Category);

//     var Publisher = document.getElementById("Publisher").innerHTML;
//     localStorage.setItem("Publisher", Publisher);

//     var PublicationDate = document.getElementById("PublicationDate").innerHTML;
//     localStorage.setItem("PublicationDate", PublicationDate);

//     var NumberofPages = document.getElementById("NumberofPages").innerHTML;
//     localStorage.setItem("NumberofPages", NumberofPages);

//     var Description = document.getElementById("Description").innerHTML;
//     localStorage.setItem("Description", Description);
// }





