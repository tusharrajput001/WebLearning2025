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

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteBook(book.id);

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Read";
    toggleBtn.onclick = () => {
      book.toggleRead();
      displayBooks();
    };

    li.appendChild(deleteBtn);
    li.appendChild(toggleBtn);
    bookList.appendChild(li);
  });
}

// Toggle form visibility
document.getElementById("newBookBtn").addEventListener("click", () => {
  const form = document.getElementById("bookForm");
  form.style.display = form.style.display === "none" ? "block" : "none";
});

// Handle form submission
document.getElementById("bookForm").addEventListener("submit", (event) => {
  event.preventDefault(); // prevent page reload

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value);
  const isReaded = document.getElementById("isReaded").checked;

  addBookToLibrary(title, author, pages, isReaded);

  // Clear form
  event.target.reset();
  document.getElementById("bookForm").style.display = "none";
});

// Optional sample books
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("1984", "George Orwell", 328, false);
