/**
 * 함수 호출 --> 파라미터 --> 함수의 매개변수에 매핑
 * Rest Parameter(레스트 파라미터) : 여러 개의 파라미터를 전송시 사용
 * Spread operator(스프레드 연산자 : ...)
 */
console.log(add(1,2));
console.log(add(1,2,3,6,5,9));
console.log(add(1,2,3,6,5,9,4,2,6,7,8,9,5));

function add(... numbers) {
    //합계 구하는 로직!!
    // let result = 0;
    // for(let i=0 ; i<numbers.length ; i++){
    //     result += numbers[i];
    // }
    
    let result = numbers.reduce((acc, cur) => acc+cur);
    return result;
}
    

console.log(add2(1,2,3));
console.log(add2(1,2,3,6,5,9));
console.log(add2(1,2,3,6,5,9,4,2,6,7,8,9,5));
    
function add2(a, b, ... numbers){
    // let c = numbers.reduce((x, y) => {return x+y});
    let c = numbers.reduce((acc, cur) => {return acc+cur});
    let sum = a + b + c;
    return sum;
}


function mul(... numbers){
    let result = numbers.reduce((acc, cur) => acc*cur);
    return result;
}

console.clear();
console.log(mul(1,2,4));
