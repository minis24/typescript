function getFinalPrice(price: number,discount: number){
    return price - price/discount;
}

console.log(getFinalPrice(100,10));   //올바른 호출예시
//console.log(getFinalPrice(100,"10%")); //잘못된 함수호출 예시 



