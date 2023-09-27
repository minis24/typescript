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
class SearchAction {
    constructor(payload) {
        this.payload = payload;
        this.actionType = "SEARCH";
    }
}
exports.SearchAction = SearchAction;
class SearchSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.actionType = 'SEARCH_SUCCESS';
    }
}
exports.SearchSuccessAction = SearchSuccessAction;
/**
 * 액션타입은 있지만 페이로드가 없는 클래스
 */
class SearchFailedAction {
    constructor() {
        this.actionType = "SEARCH_FAILED";
    }
}
exports.SearchFailedAction = SearchFailedAction;
function area(shape) {
    switch (shape.kind) {
        case 'rectangle': return shape.width * shape.height;
        case 'circle': return Math.PI * shape.radius ** 2;
    }
}
const myRectangle = { kind: 'rectangle', width: 10, height: 10 };
const myCircle = { kind: 'circle', radius: 10 };
console.log(`Rectangle Area is ${area(myRectangle)}`);
console.log(`Circle Area is ${area(myCircle)}`);
