/**
 * 배열의 값을 순회하여 콜백 함수를 적용하고, 그 조건에 맞는 결과를 새로운 배열 객체로 리턴
 * - 배열.filter(콜백 함수);
 */

let objects = [
    {name : '홍길동', age : 10},
    {name : '이순신', age : 20},
    {name : '김유신', age : 30},
];
let fruits = new Array('🍎', '🍊', '🍋', '🍏', '🍑', '🍋');


//objects 요소 중 이름이 '이순신'인 객체를 새로운 배열 객채로 생성, [{name : '이순신', age : 20}]
let obj = objects.filter((item) => item.name === '이순신');

console.log(obj);

const searchCount = (array, string) => {
    return array.filter((item) => item === string).length;

    // let result = array.filter((item) => item === string);
    // return result.length;
}

console.log(`count => ${searchCount(fruits, '🍋')}`);

