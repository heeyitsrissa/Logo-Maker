const Shapes = require('../lib/shapes.js')

class Square extends Shapes{
    constructor(sideLength, color){
        super(color);
        this.sideLength = sideLength;
    }
    render(){
        const x = 50;
        const y = 50;
        return`<rect x="${x}" y="${y}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`
    }
}
module.exports = Square;