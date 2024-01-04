

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
const book = new Book('Ral', 'Bilel', 120, 'Read');
myLibrary.push(book);

// adding book to library
const addBookToLibrary = (title, author, numPages, status) => {
  const book = new Book(title, author, numPages, status);
  myLibrary
    .push(book);
};

// grabbing the DOM elements
const main = document.querySelector('main');
const newBookButton = document.querySelector('.new-book');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.close-button');

// event listener for creating a new book
newBookButton.addEventListener('click', () => {
  modal.showModal();
});

// display the books on the page
const displayBooks = function () {
  myLibrary
    .forEach(book => {
      const card = document.createElement('div');
      card.classList = 'card';
      card.dataset.index = myLibrary.indexOf(book);
      const cardTitle = document.createElement('p');
      cardTitle.textContent = book.title;
      cardTitle.classList = '.card-title';
      const cardAuthor = document.createElement('p');
      cardAuthor.textContent = book.author;
      cardAuthor.classList = '.card-author';
      const cardNumPages = document.createElement('p');
      cardNumPages.textContent = book.numPages;
      cardNumPages.classList = '.card-author';
      const cardStatus = document.createElement('div');
      cardStatus.textContent = book.status;
      cardStatus.classList = '.card-status';
      const cardRemove = document.createElement('div');
      cardRemove.textContent = 'Remove';
      cardRemove.classList = '.card-remove';
      card.appendChild(cardTitle);
      card.appendChild(cardAuthor);
      card.appendChild(cardNumPages);
      card.appendChild(cardStatus);
      card.appendChild(cardRemove);
      main.appendChild(card);
    });
};

console.log(myLibrary.indexOf(book));

displayBooks();
