// get the names of javascript books
const books = ['A Smarter Way to Learn JavaScript','C programming','Eloquent JavaScript','JavaScript and JQuery','Python best book','HTML series','JavaScript: The Definitive Guide'];

const searching = 'javaScript';
const newBooks = [];

for(const book of books){
    if(book.toLowerCase().indexOf(searching.toLowerCase()) == true){
        newBooks.push(book);
        console.log(newBooks)
    }
}

