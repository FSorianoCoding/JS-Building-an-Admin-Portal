async function main() {

    let response = await fetch('http://localhost:3001/listBooks')    // GET method is being used, per the API website.
    let books = await response.json()   // Technically an oject, but is actually an array of books being fetched.

    books.forEach(renderBook)   // .forEach does it for each book in the array.
}

function renderBook(book) {
    let bookContainer = document.querySelector('.book-container')
    bookContainer.innerHTML += `
        <div class="col-sm-3">
            <div class="card" style="width: 100%;">
                ${book.imageURL ? `
                    <img class="card-img-top" src="${book.imageURL}" />
                `
                : ``}
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Available: ${book.quantity}</h6>
                    <p class="card-text">${book.description}</p>
                </div>
            </div>
        </div>
    `
}

main()


// Code to run For the npm start developer tools, per activity
// fetch('http://localhost:9001/updateBook',{
//     method: 'PATCH',
//     headers: { 'Content-Type': 'application/json'},
//     body: JSON.stringify({
//         'id': 3,
//         'title': 'Legends of Arathrae'
//     })
// })