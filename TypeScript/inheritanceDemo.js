var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(name, age) {
        this._name = name;
        this._age = age;
    }
    person.prototype.display = function () {
        console.log("Name : " + this._name + " Age : " + this._age);
    };
    return person;
}());
var customer = /** @class */ (function (_super) {
    __extends(customer, _super);
    function customer(custID, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this._custID = custID;
        return _this;
    }
    customer.prototype.display = function () {
        console.log("CustID : " + this._custID);
        _super.prototype.display.call(this);
    };
    return customer;
}(person));
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(eid, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this._eID = eid;
        return _this;
    }
    employee.prototype.display = function () {
        console.log("Employee Id : " + this._eID);
        _super.prototype.display.call(this);
    };
    return employee;
}(person));
var obj = new customer(101, "Muktar", 25);
obj.display();
var eobj = new employee(102, "MP", 25);
eobj.display();
//Creating Parent class object
var pobj = new person("Muku", 25);
pobj.display();
