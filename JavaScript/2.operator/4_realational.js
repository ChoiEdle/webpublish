/**
 * 비교 연산자 : >, <, >=, <=, ==(값), ===(값+데이터타입)
 */
console.log(3 > 2);     //true
console.log(3 < 2);     //false
console.log(3 >= 2);    //true
console.log(3 <= 2);    //false
console.log(3 == '3');  //true      3 == 3
console.log(3 === '3'); //false
console.log(3 == 'A');  //false     A의 아스키문자값과 비교
console.log(3 === 'a'); //false

let obj1 = {
    name : '홍길동'
}
let obj2 = {
    name : '홍길동'
}
console.log('------참조형------');

console.log(obj1 == obj2);  //false
console.log(obj1.name == obj2.name);  //true
console.log(typeof obj1 === typeof obj2);   //true

