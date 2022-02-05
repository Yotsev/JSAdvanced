const mathEnforcer = require('./MathEnforcer');
const {assert} = require('chai');

describe('testing mathEnforcer functionality', ()=>{
    describe('testing add five functionality', ()=> {
        it('passing non numeric value as first parameter', ()=>{
            assert.equal(mathEnforcer.addFive('some'),undefined);
        });

        it('passing corect parameter', ()=>{
            assert.equal(mathEnforcer.addFive(1),6);
        });

        it('passing corect parameter', ()=>{
            assert.equal(mathEnforcer.addFive(1),6);
        });
    });
    
    describe('testing subtract Ten functionality', ()=> {
        it('passing incorect parameter', ()=>{
            assert.equal(mathEnforcer.subtractTen('some'),undefined);
        });
        it('passing corect parameter', ()=>{
            assert.equal(mathEnforcer.subtractTen(11),1);
        });
    });
    
    describe('testing sum functionality', ()=> {
        it('passing fist incorect parameter', ()=>{
            assert.equal(mathEnforcer.sum('some',1),undefined);
        });
        it('passing second incorect parameter', ()=>{
            assert.equal(mathEnforcer.sum(1,'some'),undefined);
        });
        it('passing two incorect parameter', ()=>{
            assert.equal(mathEnforcer.sum('some','some'),undefined);
        });

        it('passing two corect parameter', ()=>{
            assert.equal(mathEnforcer.sum(1,2),3);
        });
    });
});