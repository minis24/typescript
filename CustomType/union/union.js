"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchFailedAction = exports.SearchSuccessAction = exports.SearchAction = void 0;
/*
    식별가능한 유니온은 공통 프로퍼티, 즉, 공통의 식별자를 가진 멤버로 이루어진 타입을 말함.
    아래 클래스에서 actionType이라는 식별자가 있으므로 유니온 식별에 해당함.
*/
/**
 * 액션타입과 페이로드가 있는 클래스
 */
var SearchAction = /** @class */ (function () {
    function SearchAction(payload) {
        this.payload = payload;
        this.actionType = "SEARCH";
    }
    return SearchAction;
}());
exports.SearchAction = SearchAction;
var SearchSuccessAction = /** @class */ (function () {
    function SearchSuccessAction(payload) {
        this.payload = payload;
        this.actionType = 'SEARCH_SUCCESS';
    }
    return SearchSuccessAction;
}());
exports.SearchSuccessAction = SearchSuccessAction;
/**
 * 액션타입은 있지만 페이로드가 없는 클래스
 */
var SearchFailedAction = /** @class */ (function () {
    function SearchFailedAction() {
        this.actionType = "SEARCH_FAILED";
    }
    return SearchFailedAction;
}());
exports.SearchFailedAction = SearchFailedAction;
function area(shape) {
    switch (shape.kind) {
        case 'rectangle': return shape.width * shape.height;
        case 'circle': return Math.PI * Math.pow(shape.radius, 2);
    }
}
var myRectangle = { kind: 'rectangle', width: 10, height: 10 };
var myCircle = { kind: 'circle', radius: 10 };
console.log("Rectangle Area is ".concat(area(myRectangle)));
console.log("Circle Area is ".concat(area(myCircle)));
function call(param) {
    if ('a' in param) {
        return param.a;
    }
    return param.b;
}
var x = { a: 123 };
console.log('x :: ', call(x));
var y = { b: 'bbbbb' };
console.log('y :: ', call(y));
var person1;
person1 = JSON.parse('{"adress" : "25 Broadway"}');
console.log(person1.address); // adress 오타로 undefined 발생
/* [출력]
undefined
*/
var person2;
person2 = JSON.parse('{"adress" : "25 Broadway"}');
//console.log(person2.address); // unknown 타입인 person2 를 사용했기때문에 컴파일도 되지 않음.
//타입스크립트는 사용자가 정의한 타입 가드로 객체의 특정 타입을 확인 할 수 있다.
//const isPerson = (object:any): object is Person => 'address' in object; 
var isPerson = function (object) { return !!object && 'address' in object; };
if (isPerson(person2)) {
    console.log(person2.address);
}
else {
    console.log('person2 is not a Person');
}
/* [출력]
person2 is not a Person
*/
if (isPerson(person1)) {
    console.log(person1.address);
}
else {
    console.log('person1 is not a Person');
}
/* [출력]
person1 is not a Person
*/
var person3 = { address: 'ssssss' };
if (isPerson(person3)) {
    console.log(person3.address);
}
else {
    console.log('person3 is not a Person');
}
/* [출력]
ssssss
*/
isPerson(null);
function isString(test) {
    return typeof test === "string";
}
function example(foo) {
    if (isString(foo)) {
        console.log("it is a string" + foo);
        console.log(foo.length); // string function
    }
}
example("hello world");
