"use strict";
exports.__esModule = true;
/*export*/ var name = "Muktar";
exports.name = name;
/*export*/ function Display() {
    console.log("Display Function Message from modul 2 ");
}
exports.Display = Display;
/*export*/ var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.DisplayStudent = function () {
        console.log("Fom Module 2 Student Name : Muktar");
    };
    return student;
}());
exports.student = student;
