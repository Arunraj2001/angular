var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function add(a, b) {
    return a + b;
}
var res = add(30, 40);
console.log(res);
console.log("..........variable annotation..........");
var data = ["arun", "madhu", "aravind", "ram"];
{
}
var result;
console.log(data);
console.log("..........object annotation..........");
var stdlst;
stdlst = {
    name: "Arun",
    id: 204,
    age: 22,
    "class": "bsc",
    section: "b",
    gender: "m"
};
console.log(stdlst);
console.log("..........template string..........");
var fname = "arun";
var lname = "kumar";
var fullname1 = "my first name" + fname + "and last name" + lname;
console.log(fullname1);
var fullname2 = "my first name ".concat(fname, " and last name ").concat(lname);
console.log(fullname2);
console.log("..........anonyms function..........");
var addanny = function (val1, val2) {
    return val1 + val2;
};
var resanny = addanny(30, 90);
console.log(resanny);
console.log("..........fat arrow function..........");
var arranny = function (num1, num2) {
    return num1 + num2;
};
var resarr = arranny(50, 50);
console.log(resarr);
console.log(arranny(30, 40));
var employee = /** @class */ (function () {
    function employee() {
        this.empid = 101;
        this.empname = "arun";
        console.log("fired from constructor");
    }
    employee.prototype.alertname = function () {
        this.empid = 201;
        var name = "priya";
        alert("student name ".concat(this.empname, "and student id is ").concat(this.empid));
    };
    employee.prototype.findcapital = function () {
        console.log("student of the selected state is delhi");
        console.log("student name ".concat(this.empname, "and student id is ").concat(this.empid));
    };
    return employee;
}());
var objemp = new employee();
console.log(objemp.empid);
objemp.alertname();
objemp.findcapital();
var dept = /** @class */ (function (_super) {
    __extends(dept, _super);
    function dept() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dept.prototype.finddept = function () {
        console.log("this student belongs to cse dept");
    };
    return dept;
}(employee));
var dpt = new dept();
dpt.finddept();
