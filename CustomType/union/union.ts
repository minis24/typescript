"use strict"

/*
    식별가능한 유니온은 공통 프로퍼티, 즉, 공통의 식별자를 가진 멤버로 이루어진 타입을 말함.
    아래 클래스에서 actionType이라는 식별자가 있으므로 유니온 식별에 해당함.
*/


/**
 * 액션타입과 페이로드가 있는 클래스
 */
export class SearchAction{
    actionType ="SEARCH";
    constructor (readonly payload:{searchQuery: string}){

    }

}


export class SearchSuccessAction{
    actionType = 'SEARCH_SUCCESS';
    constructor (public payload: {searchResults: string[]}){}

}

/**
 * 액션타입은 있지만 페이로드가 없는 클래스
 */
export class SearchFailedAction{
    actionType = "SEARCH_FAILED";
}


// 유니온 타입을 선언
export type SearchActions = SearchAction | SearchSuccessAction | SearchFailedAction;




/*
    또다른 유니온 식별 (Rectangle, Circle)
*/

interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

interface Circle{
    kind: 'circle';
    radius: number;
}


//Shape 타입은 유니온 식별로 Rectangle 과 Circle 을 가지며, 
//이들 타입 모두 공통으로 kind 프로퍼티를 가지고 있음

type Shape = Rectangle | Circle ;


function area (shape: Shape) {
    switch (shape.kind) {
        case 'rectangle' : return shape.width * shape.height;
        case 'circle' : return Math.PI * shape.radius **2;
    }
}

const myRectangle: Rectangle = {kind:'rectangle',width:10,height:10};
const myCircle: Circle = {kind:'circle',radius:10};

console.log(`Rectangle Area is ${area(myRectangle)}`);
console.log(`Circle Area is ${area(myCircle)}`);



//타입가드 in 
// --> 타입가드 in 키워드는 타입 범위를 축소하는 표현.
interface IA {
    a:number;
}

interface IB {
    b: string;
}

function call (param : IA | IB){
    if ('a' in param){
        return param.a;
    }
    return param.b;
}

let x:IA = {a:123}
console.log('x :: ',call(x));


let y:IB = {b:'bbbbb'}
console.log('y :: ',call(y));




//타입 any 사용
type Person = {
    descriminator : 'person' ;
    address: string;
}

let person1: any;
person1 = JSON.parse('{"adress" : "25 Broadway"}');

console.log(person1.address); // adress 오타로 undefined 발생

/* [출력]
undefined
*/


let person2:unknown ;
person2 = JSON.parse('{"adress" : "25 Broadway"}');
//console.log(person2.address); // unknown 타입인 person2 를 사용했기때문에 컴파일도 되지 않음.


//타입스크립트는 사용자가 정의한 타입 가드로 객체의 특정 타입을 확인 할 수 있다.
//const isPerson = (object:any): object is Person => 'address' in object; 
//const isPerson = (object:any): object is Person => !!object && 'address' in object; 

/*
위에서는 address 프로터티의 유무만으로 Person 타입을 식별할 수 있었는데…경우에 따라 한가지 프로퍼티만으로는 식별하기에 부족한 경우가 있다. 예를들어 , 다른 클래스에 address 프로퍼티가 있는경우….

객체가 특정 타입에 매칭되는지를 확인하려면 몇가지 프로퍼티가 더 필요하다. 
더 간단한 방법으로는 식별자 프로퍼티를 가지고 타입을 식별하는것.
*/
const isPerson = (object:any): object is Person => !!object && object.descriminator === 'person'; 


if(isPerson(person2)){
    console.log(person2.address)
}
else{
    console.log('person2 is not a Person');
}
/* [출력]
person2 is not a Person
*/

if(isPerson(person1)){
    console.log(person1.address)
}
else{
    console.log('person1 is not a Person');
}
/* [출력]
person1 is not a Person
*/


let person3 = {address:'ssssss'}
if(isPerson(person3)){
    console.log(person3.address)
}
else{
    console.log('person3 is not a Person');
}
/* [출력]
ssssss
*/

isPerson(null)


function isString(test: any): test is string{
    return typeof test === "string";
}

function example(foo: any){
    if(isString(foo)){
        console.log("it is a string" + foo);
        console.log(foo.length); // string function
    }
}
example("hello world");



