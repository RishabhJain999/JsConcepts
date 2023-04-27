// Oops is a style of programming not a tool in which program can be break down into segments of objects which can communicate with each other. Each object has its own properties which can be accessed , modified through various operations/methods.

// Eg- Write a program to calculate the area of any shape.

export class Shapes {
  length: number;
  breadth: number;
  side: number;
  constructor(length?: number, breadth?: number, side?: number) {
    this.length = length || 1;
    this.breadth = breadth || 1;
    this.side = side || 1;
  }
  area(): number {
    return this.length * this.breadth;
  }
}
