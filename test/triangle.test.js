const { Triangle } = require('homework/Logo-Maker/lib/triangle.js');

describe('Triangle', () => {
    test('it should render a triangle with the correct attributes', () => {
        const triangle = new Triangle('blue');
        expect(triangle.render()).toEqual('<polydon points="150, 18 244, 182 56, 182" fill="blue" />')
    })
})