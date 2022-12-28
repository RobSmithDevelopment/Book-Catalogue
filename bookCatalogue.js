 // Add a book to sessionStorage
function addBook() {
  // Get the book values from the form
  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;
  var genre = document.getElementById('genre').value;
  
  // Create a new book object
  var book = {
    title: title,
    author: author,
    genre: genre,
  };
  
  // Get the existing book list from sessionStorage, or create a new one if it doesn't exist
  var bookList = JSON.parse(sessionStorage.getItem('bookList')) || [];
  
  // Add the new book to the list
  bookList.push(book);
  
  // Save the updated list to sessionStorage
  sessionStorage.setItem('bookList', JSON.stringify(bookList));
  
  // Clear the form fields
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('genre').value = '';
  
  // Update the displayed book list
  updateBookList();
}

// Update the displayed book list
function updateBookList() {
  // Get the book list from sessionStorage
  var bookList = JSON.parse(sessionStorage.getItem('bookList')) || [];
  
 // Add each book to the book list element
  bookList.forEach(function(book, index) {
    // capturing the div updateBooks 
    var updateBooks = document.getElementById('updateBooks');
    // creating form element 
    var form = document.createElement('form');
    // giving it a class name of bookForm
    form.className = "bookForm"
    // giving the form content with variables to make each one present with its submitted information
    // adding an update and delete button to each form which we attach our update and delete functions to
    form.innerHTML =  `<label for="title">Title:</label><br>
    <input type="text" id="title${index}" value = "${book.title}"><br>
    <label for="author">Author:</label><br>
    <input type="text" id="author${index}" value = "${book.author}"><br>
    <label for="genre">Genre:</label><br>
    <input type="text" id="genre${index}" value = "${book.genre}"><br> <br>
    <button onclick="updateBook(${index})" class="updateButton">Update</button>
    <button onclick="deleteBook(${index})" class="deleteButton">Delete</button>`
    updateBooks.appendChild(form);
  });
}
// delete a book from sessionStorage
function deleteBook(index) {
  // Getting the bookList from sessionStorage
  var bookList = JSON.parse(sessionStorage.getItem('bookList'));
  // using the index of the button pressed, passed from the forEach and splicing at the index for a length of 1
  bookList.splice(index, 1);
  // returning the updated array to sessionStorage, returning it to a string
  sessionStorage.setItem('bookList', JSON.stringify(bookList));
}

// function to run on clicking update on a book form
function updateBook(index) {
  // Storing form input values in variable
  var title = document.getElementById(`title${index}`).value;
  var author = document.getElementById(`author${index}`).value;
  var genre = document.getElementById(`genre${index}`).value;
  // Getting bookList from sessionStorage
  var bookList = JSON.parse(sessionStorage.getItem('bookList'));
  // updating the values of the book details in the book form
  bookList[index].title = title
  bookList[index].author = author;
  bookList[index].genre = genre;
  // sending updated array back to sessionStorage, stringifying it
  sessionStorage.setItem('bookList', JSON.stringify(bookList));
}


// Update the book list when the page loads
updateBookList();
  



