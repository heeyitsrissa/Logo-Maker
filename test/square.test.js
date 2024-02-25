const { Square } = require('homework/Logo-Maker/lib/square.js');

describe('Square', () => {
    test('it shoulde render a square with the correct attributes', () => {
        const square = new Square(100, 'green');
        expect(sqaure.render()).toEqual('<rect x="50" y= "50" width="100" height="100" fill="green" />')
    })
})