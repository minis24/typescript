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