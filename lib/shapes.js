

class Shapes {
    constructor(color){
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        throw new Error('Method not Implemented');
    }
}
module.exports = Shapes;