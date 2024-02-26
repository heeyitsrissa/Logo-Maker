const Shapes = require('../lib/shapes.js')

class Circle extends Shapes {
    constructor(radius, color){
    super(color);
    this.radius = radius
    }
    render(){
        const cx = 150;
        const cy = 100
        return `<circle cx="${cx}" cy="${cy}" r="${this.radius}" fill="${this.color}" />`
    }
}

module.exports = Circle;