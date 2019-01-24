var employee = /** @class */ (function () {
    function employee(id, name) {
        this._id = id;
        this._name = name;
    }
    Object.defineProperty(employee.prototype, "sal", {
        get: function () {
            return this._sal;
        },
        set: function (sal) {
            this._sal = sal;
            this._da = sal * 0.3;
        },
        enumerable: true,
        configurable: true
    });
    employee.prototype.display = function () {
        console.log("ID : " + this._id + " Name : " + this._name + " Sal :" + this._sal);
    };
    return employee;
}());
var obj = new employee(101, "Muktar");
obj.sal = 5000;
obj.display();
obj.sal = obj.sal + 5000;
console.log(obj.sal);
