const { Shapes } = require('/Users/marissapratt/bootcamp/homework/Logo-Maker/lib/shapes.js');

describe('shapes', ()=> {
    test(`It should throw and error if render method is not implemented.`, () => {
        const shape = new Shapes();
        expect(()=> shape.render()).toThrowError('Method not Implemented');
    });
    test('it should set correct color', () => {
        const shape = new Shapes();
        shape.setColor('red');
        expect(shape.color).toBe('red');
    })

});