/**
 * 함수 생성 및 호출
 */
import {toNumber} from '../commons/util.js';

add(100, 200);
add('100', '200');

function add(num1, num2) {
    let obj = toNumber(num1, num2);
    console.log(`${obj.num1} + ${obj.num2} = ${obj.num1+obj.num2}`);
}

//Arrow funtion
const min = (num1, num2) => {
    let obj = toNumber(num1, num2);
    // if(typeof num1 === 'string' && typeof num2 === 'string'){
    //     num1 = parseInt(num1);
    //     num2 = parseInt(num2);
    // }
    if(obj.num1>=obj.num2){
        console.log(`${obj.num1} - ${obj.num2} = ${obj.num1-obj.num2}`);
    } else {
        console.log(`${obj.num2} - ${obj.num1} = ${obj.num2-obj.num1}`);
    }
}

min(200, 100);
min('200','100');

