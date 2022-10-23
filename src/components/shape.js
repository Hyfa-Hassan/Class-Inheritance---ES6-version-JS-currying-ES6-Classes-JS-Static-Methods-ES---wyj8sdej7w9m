// declare class
class Shape{
  constructor(color,radius){ //method called automatically
    this.color = color;
    this.radius = radius;
  }
  get area(){
    return 3.14*Math.pow(this.radius, 2);
  }
  get drawShape(){
    return 2;
  }
}
var circle1 = new Circle(green,5);
circle1.area();
circle1.drawShape();
// export class using module.exports
export {Shape, Circle}
