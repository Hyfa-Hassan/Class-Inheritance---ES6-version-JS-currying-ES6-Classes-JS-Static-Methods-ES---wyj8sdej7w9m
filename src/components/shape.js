let Shape = class {
    drawShape() {
        console.log("Drawing Shape");
    }
    calculateArea() {
        console.log("calculating Area");
    }
    color(rang) {
        console.log(`filling in the ${rang}`);
    }
}
// export class using module.exports
module.exports = Shape;
