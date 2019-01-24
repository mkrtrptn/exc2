var c1 = /** @class */ (function () {
    function c1() {
    }
    c1.prototype.m1 = function () {
        console.log("Method m1");
    };
    c1.prototype.m2 = function () {
        console.log("Method M2");
        console.log("Second Statements Of method !");
    };
    return c1;
}());
var obj = new c1();
obj.m1();
debugger;
obj.m2();
//# sourceMappingURL=debuggingdemo.js.map