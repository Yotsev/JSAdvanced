const isOddOrEven = require('./EvenOrOdd');
const { assert } = require('chai');

describe('isOddOrEven function test', () =>{
    it('passing a non string element to the function (undefined)', ()=>{
        assert.equal(isOddOrEven(undefined),undefined);
    });

    it('passing one letter to the function (L)', () =>{
        assert.equal(isOddOrEven('L'),'odd');
    });

    it('passing even string to the function (some)', () =>{
        assert.equal(isOddOrEven('some'),'even');
    });

    it('passing odd string to the function (something)', () =>{
        assert.equal(isOddOrEven('something'),'odd');
    });
});
