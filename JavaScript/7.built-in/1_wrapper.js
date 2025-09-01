/**
 * 기본형(원시) 데이터 타입 - number, string, boolean, null, undefined
 * 기본 데이터타입에 클래스 형식으로 정의한 데이터 타입을 wrapper 클래스라고 함
 */

//Number 클래스 형식
let a = "123";
if(typeof a === "string") { a = parseInt(a); }
console.log(typeof a, a);

if(typeof a === "number") { console.log(a); }

const nobj1 = new Number(123);
const nobj2 = new Number("123");

console.log(nobj1 instanceof Number, nobj1);
console.log(nobj2 instanceof Number, nobj2);
console.log(nobj1 == nobj2);        //nobj1과 2는 객체라서 주소값을 가지기 때문에 false
console.log(nobj1.valueOf() == nobj2.valueOf());    //값 비교

let maxValue = Number.MAX_VALUE;
let minValue = Number.MIN_VALUE;
console.log(maxValue, minValue);

console.clear();
//String : 문자열 클래스
let str1 = new String("Hello");
let str2 = new String("Hello");

console.log(str1, str1.length, str1.valueOf());
console.log(str2, str2.length, str2.valueOf());
console.log(str1 == str2);        //str1과 2는 객체라서 주소값을 가지기 때문에 false
console.log(str1.valueOf() == str2.valueOf());  //값 비교

console.clear();
//Boolean : 불리언 클래스
let flag1 = true;
let flag2 = new Boolean(true);

console.log(flag1 == flag2);        
console.log(flag1 == flag2.valueOf());


