class Square extends Shapes{
    constructor(sideLength, color){
        super(color);
        this.sideLength = sideLength;
    }
    render(){
        return`<rect x="50" y="100" width="${this.sideLength}" hieght="${this.sideLength}" fill="${this.color}" />`
    }
}
module.exports = Square;