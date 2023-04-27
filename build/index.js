"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeFS = void 0;
const Map_1 = require("./Map");
const Oops_1 = require("./Oops");
const Set_1 = require("./Set");
// import { EmployeeFS } from './Oops/Oops.js';
(0, Set_1.SetFn)();
(0, Map_1.MapFn)();
const rectangle = new Oops_1.Shapes(undefined, 2);
console.log(rectangle.area());
// 1st
const employee1 = new Object();
employee1.name = 'rishabh';
employee1.age = 25;
console.log(employee1);
// 2nd
const employee2 = Object.create(employee1);
// employee2.company = 'qsfgs';
// employee2.name = 'rishi';
// employee2.age = 25;
console.log(employee2.name);
console.log(employee2);
// 3rd
let o1 = 'I am an Object';
console.log(typeof o1);
console.log(o1);
function EmployeeFS(name, age, designation) {
    this.name = name;
    this.age = age;
    this.designation = designation;
    this.employeeDetails = () => {
        return `Employee Details are -
     Name: ${this.name}
     Age: ${this.age}
     Designation: ${this.designation}`;
    };
}
exports.EmployeeFS = EmployeeFS;
// @ts-ignore
const uniqueEmployee = new EmployeeFS('rishabh', 'sde', '25');
console.log(uniqueEmployee);
// The prototype property of every object created from constructor function is always points back to the prototype property of the contructor function from which that object is created.
// All objects created from constructor function shares its prototype property. Due to this, all properties or methods called on the prototype proprty of an contructor function can be accessed by the object created from that function.
//  Add property company to that EmployeeFS constructor function..
// Can't do that with this way --
EmployeeFS.company = 'maang';
console.log(uniqueEmployee.company); //undefined
// Right way--
EmployeeFS.prototype.company = 'Maang';
console.log(EmployeeFS.prototype);
/*
{
    company:"Maang",
    contructor: EmplyeeFS(name, age),
    __proto__: Object
}
*/
console.log(uniqueEmployee.company);
