// import using require
const hello = require('./Shape')
// declare class
class Circle extends Shape{
  constructor(){
    super();
    calculateArea(){
        console.log("first")
    }
  }
}

// export class using module.exports
module.exports = Circle
