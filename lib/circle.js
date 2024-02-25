class Circle extends Shapes {
    constructor(radius, color){
    super(color);
    this.raduis = radius
    }
    render(){
        return `<circle cx= "150" cy= "100" r= "${this.radius}" fill= "${this.color}" />`
    }
}

module.exports = Circle;