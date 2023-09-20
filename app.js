"use strict";
const myName = (name) => {
    console.log(name);
};
myName('qry');
const sayName = (value) => {
    if (typeof value === 'string') {
        return value;
    }
    else {
        return value;
    }
};
sayName('abb');
let student = {
    name: 'qry',
    height: 165,
    //weight:50
};
let str = ['qry', 5];
console.log(typeof str);
let str2 = ['qry', 5];
let arr = [() => 'qqq', () => 'bbb'];
console.log(arr[0]());
