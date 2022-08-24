async function main(){
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(displayBook)   //creating a display for each book using callback 'displayBook' below.
}

function displayBook(book){
    let rootDiv = document.querySelector('#root')  //selecting the only <div> from the HTML where we'll be making our list.

    let li = document.createElement('li')    //creating our list <li> inside the document html.
    li.textContent = book.title              //setting the content of the li to be the title of the book found in the API

    let input = document.createElement('input')  //creating a text input that will give us an integer.
    input.value = book.quantity                  //input.value = to quantity, which is a property of the book in the API.

    let saveButt = document.createElement('button')  //creating save button 
    saveButt.textContent = 'Save'                   // naming the button 'Save'

    saveButt.addEventListener('click', function(){
        fetch('http://localhost:3001/updateBook',{   //getting URL from API as the fetch where we will PATCH to update our book lists.
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                id: book.id,            // we're updating book passed through the function based on the id.
                quantity: input.value   // updating the quantity of the books to whatever we just typed.
            })
        })
    })

    li.append(input, saveButt)  //adding the input text and save button to the list.
    rootDiv.append(li)      //list then being appended to the rootDiv in the html to display in our listBooks URL.
}

main()