/**
 * Date 날짜 형식 클래스
 * - Date 클래스 생성후 getFullYear(), getDay()...
 */

console.log(Date.now());    //사용을 권장하지 않음
console.log(new Date());    //권장함!

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;       //밀레니엄 버그 때문에 +1 해야한다고 함
let day = date.getDay();

console.log(`${year}년 ${month}월 ${day}일`);
console.log(date.toLocaleDateString('ko-KR'));
console.log(date.toLocaleDateString('en-US'));





