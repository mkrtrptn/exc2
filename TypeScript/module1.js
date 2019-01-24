"use strict";
exports.__esModule = true;
/*export*/ var pi = 3.14;
exports.pi = pi;
/*export*/ function Display() {
    console.log("Display Function Message from module 1 ");
}
exports.Display = Display;
/*export*/ var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.DisplayStudent = function () {
        console.log("From module1 Student Name : MP");
    };
    return student;
}());
exports.student = student;
