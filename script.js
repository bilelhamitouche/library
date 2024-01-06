
// book constructor
const Book = function (title, author, numPages, status) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.status = status;
};

Book.prototype.toggleStatus = function () {
  this.status === 'Read' ? this.status = 'Not Read' : this.status = 'Read';
};

// library
const myLibrary = [];

// adding book to library
const addBookToLibrary = (title, author, numPages, status) => {
  const book = new Book(title, author, numPages, status);
  myLibrary.push(book);
};

// display a book
const displayBook = (book) => {
  const card = document.createElement('div');
  card.classList = 'card';
  card.dataset.index = myLibrary.indexOf(book);
  const cardTitle = document.createElement('p');
  cardTitle.textContent = book.title;
  cardTitle.classList = 'card-title';
  const cardAuthor = document.createElement('p');
  cardAuthor.textContent = book.author;
  cardAuthor.classList = 'card-author';
  const cardNumPages = document.createElement('p');
  cardNumPages.textContent = book.numPages;
  cardNumPages.classList = 'card-author';
  const cardStatus = document.createElement('button');
  cardStatus.textContent = book.status;
  cardStatus.classList = 'card-status';
  const cardRemove = document.createElement('button');
  cardRemove.textContent = 'Remove';
  cardRemove.classList = 'card-remove';
  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardNumPages);
  card.appendChild(cardStatus);
  card.appendChild(cardRemove);
  main.appendChild(card);
  // toggle status event listener
  cardStatus.addEventListener('click', (event) => {
    myLibrary[event.target.parentElement.dataset.index].toggleStatus();
    event.target.textContent = myLibrary[event.target.parentElement.dataset.index].status;
  });
  // remove book event listener
  cardRemove.addEventListener('click', (event) => {
    main.removeChild(event.target.parentElement);
    myLibrary.splice(card.dataset.index, 1);
  });
};

// grabbing the DOM elements
const main = document.querySelector('main');
const newBookButton = document.querySelector('.new-book');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.add-button');
const form = document.querySelector('.new-book-form');
const newBookTitle = document.querySelector('#title');
const newBookAuthor = document.querySelector('#author');
const newBookNumPage = document.querySelector('#numberOfPages');
const newBookStatus = document.querySelector('#status');
const addBookButton = document.querySelector('.add-book');
const toggleStatusButton = document.querySelector('.card-status');
const removeBookButton = document.querySelector('.card-remove');

// event listener for creating a new book
newBookButton.addEventListener('click', () => {
  modal.showModal();
});

// event listener for submitting book
closeModalButton.addEventListener('click', () => {
  addBookToLibrary(newBookTitle.value, newBookAuthor.value, newBookNumPage.value, newBookStatus.checked ? 'Read' : 'Not Read');
  modal.close();
  displayBook(myLibrary[myLibrary.length - 1]);
});


// display the books on the page
const displayBooks = function () {
  myLibrary.forEach((book) => {
    displayBook(book);
  });
};

window.onload = (event) => displayBooks();
