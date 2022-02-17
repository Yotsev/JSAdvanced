let library = require('./library');
let { expect } = require('chai');

describe('Library tests', () => {

    describe('calcPriceOfBook tests', () => {
        it('Invalid input - name of the book', () => {
            expect(() => library.calcPriceOfBook(1, 1)).to.throw('Invalid input');
        });

        it('Invalid input - year of the book', () => {
            expect(() => library.calcPriceOfBook('Something', 'Something')).to.throw('Invalid input');
        });

        it('Valid input with year before 1980', () => {
            expect(library.calcPriceOfBook('Some Book', 1979)).to.equal('Price of Some Book is 10.00');
        });

        it('Valid input with year equal 1980', () => {
            expect(library.calcPriceOfBook('Some Book', 1980)).to.equal('Price of Some Book is 10.00');
        });

        it('Valid input with year after 1980', () => {
            expect(library.calcPriceOfBook('Some Book', 1981)).to.equal('Price of Some Book is 20.00');
        });
    });

    describe('findBook tests', () => {
        it('Invalid input - year of the book', () => {
            expect(() => library.findBook([], 'Some Book').to.throw('Invalid input'));
        });

        it('Valid input available book', () => {
            expect(library.findBook(['Some Book', 'Some Book 1', 'Some Book 2'], 'Some Book')).to.equal('We found the book you want.');
        });

        it('Valid input not available book', () => {
            expect(library.findBook(['Some Book', 'Some Book 1', 'Some Book 2'], 'Some Book 3')).to.equal('The book you are looking for is not here!');
        });
    });

    describe('arrangeTheBooks tests', () => {
        it('Invalid input - string', () => {
            expect(() => library.arrangeTheBooks('String').to.throw('Invalid input'));
        });

        it('Invalid input negative number', () => {
            expect(() => library.arrangeTheBooks(-100).to.throw('Invalid input'));
        });

        it('Valid input number below limit (40)', () => {
            expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.');
        });

        it('Valid input number equal to limit (40)', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });

        it('Valid input number above to limit (40)', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});