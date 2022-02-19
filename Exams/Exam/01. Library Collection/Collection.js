class LibraryCollection {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length === this.capacity) {
            throw new Error('Not enough space in the collection.');
        }

        let currentBook = {
            bookName,
            bookAuthor,
            payed: false
        };

        this.books.push(currentBook);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let theBook = this.books.find(x => x.bookName === bookName);

        if (!theBook) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (theBook.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        theBook.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let theBook = this.books.find(x => x.bookName === bookName);

        if (!theBook) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if (!theBook.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        let indexOfBook = this.books.findIndex(x => x.bookName === bookName);
        this.books.splice(indexOfBook, 1);

        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        let output = [];

        let emptySlots = this.capacity - this.books.length;
        output.push(`The book collection has ${emptySlots} empty spots left.`)

        if (bookAuthor === undefined) {

            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName)).forEach(x => output.push(`${x.bookName} == ${x.bookAuthor} - ${x.payed ? 'Has Paid' : 'Not Paid'}.`));

        } else {
            let authorBooks = this.books.find(x => x.bookAuthor === bookAuthor);

            if (!authorBooks) {
                throw new Error(`${bookAuthor} is not in the collection.`)
            } else {
                return `${authorBooks.bookName} == ${authorBooks.bookAuthor} - ${authorBooks.payed ? 'Has Paid' : 'Not Paid'}.`;
            }
        }

        return output.join('\n');
    }
}

const library = new LibraryCollection(2)
library.addBook("In Search of Lost Time", "Marcel Proust")
library.addBook("Don Quixote", "Miguel de Cervantes")
library.addBook('Ulysses', 'James Joyce')
