"use strict";
//  Usage --> Helps us to find the unique elements from the iterables(string , srray, objects, ...etc);
// Set are case-sensitive
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetFn = void 0;
//   @ts-ignore
const SetFn = () => {
    const array = [1, 2, 3, 4, 5, 6, 1, 5, 8, 9, 10, 11];
    const UniqueArray = new Set(array);
    console.log(UniqueArray);
    const string = 'Rishabh Jain';
    const UniqueString = new Set(string);
    console.log(UniqueString);
    console.log(UniqueArray.size);
    console.log(UniqueString.size);
    //  has method return boolean
    console.log(UniqueArray.has(1));
    console.log(UniqueString.has('r'));
    console.log(UniqueArray.add({ hello: '1' }));
    console.log(UniqueString.add('1'));
    console.log(UniqueArray.delete(1));
    console.log(UniqueArray);
    //   UniqueArray.clear();
    //   console.log(UniqueArray);
    for (let val of UniqueArray) {
        console.log(val);
    }
    //   convert Set into Array
    console.log([...UniqueArray]);
    //Cannot use Set with the non-iterable values, Here object is an non-iterable.(We cannot directly loop the objects)
    //   const object = { firstName: 'Rishabh', SecondName: 'Jain' };
    //   const UniqueObject = new Set(object);
    //   console.log(UniqueObject);
    //Cannot use Set with the non-iterable values, Here number is an non-iterable.(We cannot directly loop the  Number type)
    // const number = 12;
    //   const UniqueNumber = new Set(number);
    //   console.log(UniqueNumber);
};
exports.SetFn = SetFn;
