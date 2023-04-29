import { MapFn } from './Map';
import { Shapes } from './Oops';
import { SetFn } from './Set';
// import { EmployeeFS } from './Oops/Oops.js';
SetFn();
MapFn();
const rectangle = new Shapes(undefined, 2);

console.log(rectangle.area());

interface EmployeeProps {
  name?: string;
  age?: number;
  company?: string;
}
// 1st
const employee1: EmployeeProps = new Object();
employee1.name = 'rishabh';
employee1.age = 25;
console.log(employee1);

// 2nd
const employee2: EmployeeProps = Object.create(employee1);
// employee2.company = 'qsfgs';
// employee2.name = 'rishi';
// employee2.age = 25;
console.log(employee2.name);
console.log(employee2);
// 3rd
let o1: Object = 'I am an Object';
console.log(typeof o1);
console.log(o1);

export function EmployeeFS(
  this: {
    name: string;
    age: number;
    designation: string;
    employeeDetails: () => void;
  },
  name: string,
  age: number,
  designation: string
) {
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

// class Keyword to implememt classes in js
class University {
  college: string;
  location: string;
  constructor(college: string, location: string) {
    this.college = college;
    this.location = location;
  }
  getCollegeDetails = () => {
    return `College name is ${this.college} and location is ${this.location}`;
  };
}
const college1 = new University('Abesit', 'Ghaziabad');
console.log(University.prototype);
