let myLibrary = [];

function Book(title, author, pages, isReaded) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isReaded = isReaded;
}

Book.prototype.toggleRead = function () {
  this.isReaded = !this.isReaded;
};

function addBookToLibrary(title, author, pages, isReaded) {
  const bookNew = new Book(title, author, pages, isReaded);
  myLibrary.push(bookNew);
  displayBooks();
}

function deleteBook(id) {
  myLibrary = myLibrary.filter((book) => book.id !== id);
  displayBooks();
}

function displayBooks() {
  const bookList = document.querySelector("ul");
  bookList.innerHTML = "";

  myLibrary.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${
      book.isReaded ? "Already read" : "Not read yet"
    }`;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = () => deleteBook(book.id);

    // Toggle read button
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Read";
    toggleBtn.style.marginLeft = "5px";
    toggleBtn.onclick = () => {
      book.toggleRead();
      displayBooks();
    };

    li.appendChild(deleteBtn);
    li.appendChild(toggleBtn);
    bookList.appendChild(li);
  });
}

// Sample books
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("1984", "George Orwell", 328, false);
