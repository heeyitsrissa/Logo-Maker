const Shapes  = require('../lib/shapes.js');

describe('Shapes', ()=> {
    test(`It should throw and error if render method is not implemented.`, () => {
        const shapes = new Shapes();
        expect(() => shapes.render()).toThrowError('Method not Implemented');
    });
    test('it should set correct color', () => {
        const shapes = new Shapes();
        shapes.setColor('red');
        expect(shapes.color).toBe('red');
    })

});