const Circle = require('../lib/circle.js');

describe('Circle', () => {
    test('it should render a circle with the correct attributes', () => {
        const circle = new Circle(50, 'blue');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />')
    })
})