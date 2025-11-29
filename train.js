const books = [
  { title: "1984", author: "George Orwell", pages: 328, available: true },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, available: false },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180, available: true },
  { title: "Animal Farm", author: "George Orwell", pages: 112, available: true },
  { title: "Pride and Prejudice", author: "Jane Austen", pages: 432, available: false }
];
let clickTime = 0;
let runTime = 0;
 const availableOnlyBtn = document.getElementById("availableOnly") .addEventListener("click", () => {
  let availableBooksContainer = ""
  if (authorSearch.value) {
    return;
  }
  clickTime++
  if (clickTime % 2 == 0) {
    booksContainer.innerHTML = ""
    return;
  }
  let availableBooks = books.filter(book => book.available == true)
  if (runTime == 0) {
    for (item of availableBooks) {
      availableBooksContainer +=
        `
             <p>${item.title}</p>
             <p>${item.author}</p>
             <p>${item.pages}</p>
             <p>${item.available}</p>
             `
    }
  }

  booksContainer.innerHTML = availableBooksContainer
  runTime = 1;
})
authorSearch.addEventListener("keyup", () => {
  let searchedBook = books.find(book => book.author == authorSearch.value)
  if (searchedBook === undefined) {
    booksContainer.innerHTML = ""
    return;
  }
  booksContainer.innerHTML =
    `
<p>${searchedBook.title}</p>
<p>${searchedBook.author}</p>
<p>${searchedBook.pages}</p>
<p>${searchedBook.available}</p>
`
})