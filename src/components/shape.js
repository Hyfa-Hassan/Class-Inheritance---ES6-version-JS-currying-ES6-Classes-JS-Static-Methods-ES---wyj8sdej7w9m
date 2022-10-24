// declare class
class Shape{
  constructor(){
        this.color = "red";
    }

    drawShape(){
        console.log("shape drawn");
    }
    calculateArea(){
        console.log("Area calucted")
    }
}
// export class using module.exports
module.exports = Shape
