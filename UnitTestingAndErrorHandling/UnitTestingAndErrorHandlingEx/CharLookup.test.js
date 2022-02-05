const { assert } = require('chai');
const lookupChar = require('./CharLookup');

describe('CharLookup functionality testing', () => {
    it('passing non string as first parameter (12)', () => {
        assert.equal(lookupChar(12, 1), undefined);
    });

    it('passing non number as second parameter (12)', () => {
        assert.equal(lookupChar('some', ''), undefined);
    });

    it('passing two correct parametars with index less then zero', () => {
        assert.equal(lookupChar('some', -1), 'Incorrect index');
    });

    it('passing two correct parametars with index bigger then string lenght', () => {
        assert.equal(lookupChar('some', 20), 'Incorrect index');
    });

    it('passing two correct parametars with index equal to string lenght', () => {
        assert.equal(lookupChar('some', 4), 'Incorrect index');
    });

    it('passing two correct parametars and correct string', () => {
        assert.equal(lookupChar('some', 2), 'm');
    });

    it('passing one letter as fist parameter', () => {
        assert.equal(lookupChar('s', 0), 's');
    });
});