var employee = /** @class */ (function () {
    function employee(eid, ename, sal) {
        this._empID = eid;
        this._ename = ename;
        this._sal = sal;
        employee._count++;
    }
    employee.prototype.incrementSal = function (amt) {
        if (amt === void 0) { amt = 2000; }
        this._sal = this._sal + amt;
    };
    employee.prototype.display = function () {
        console.log("Name : " + this._ename + " Employee ID : " + this._empID + " Salary :" + this._sal + " ");
    };
    employee.count = function () {
        return employee._count;
    };
    return employee;
}());
var emp1 = new employee(1, "mp", 1000);
emp1.incrementSal();
emp1.display();
var emp2 = new employee(2, "Emma", 1000);
emp2.incrementSal(5000);
emp2.display();
console.log(" " + employee.count());
