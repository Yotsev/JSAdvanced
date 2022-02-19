let flowerShop = require('./flowerShop');
let { expect, assert } = require('chai');

describe('flowerShop Tests', () => {

    describe('calcPriceOfFlowers tests', () => {
        it("Invalid parameters - flower", () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 1)).to.throw('Invalid input!');
        });

        it("Invalid parameters - price", () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', '', 1)).to.throw('Invalid input!');
        });

        it("Invalid parameters - price", () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 1, '')).to.throw('Invalid input!');
        });

        it("Valid parameters", () => {
            expect(flowerShop.calcPriceOfFlowers('Rose', 1, 2)).to.equal(`You need $2.00 to buy Rose!`);
        });
    });

    describe('checkFlowersAvailable tests', () => {
        it('Unavailable target flower', () => {
            expect(flowerShop.checkFlowersAvailable('Tulip', ["Rose", "Lily", "Orchid"])).to.equal(`The Tulip are sold! You need to purchase more!`);
        });

        it('Available target flower', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equal(`The Rose are available!`);
        });
    });

    describe('sellFlowers tests', () => {
        it("Invalid parameters - array", () => {
            expect(() => flowerShop.sellFlowers('', 1)).to.throw('Invalid input!');
        });

        it("Invalid parameters - space", () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], '')).to.throw('Invalid input!');
        });

        it("Invalid parameters - space bellow zero", () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -5)).to.throw('Invalid input!');
        });

        it("Invalid parameters - space above array length", () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 4)).to.throw('Invalid input!');
        });

        it("Invalid parameters - space equal array length", () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3)).to.throw('Invalid input!');
        });

        it("Valid parameters - space equal array length", () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.equal('Rose / Orchid');
        });
    });
});