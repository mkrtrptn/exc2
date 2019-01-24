var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        var res = 3.14 * this.radius;
        console.log("Area Of Circle Is : " + res);
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    Rectangle.prototype.area = function () {
        var res = this.length * this.width;
        console.log("Area Of Rectangle Is : " + res);
    };
    return Rectangle;
}());
var Cobj = new Circle(12);
Cobj.area();
var Robj = new Rectangle(14, 25);
Robj.area();
