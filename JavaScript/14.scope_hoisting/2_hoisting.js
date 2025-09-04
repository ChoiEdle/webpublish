/**
 * 호이스팅(Hoisting) : 파일이 호출되면 실행 전 객체를 메모리에 생성하고 로드하는 작업
 * - function 키워드로 정의된 함수
 */

test1();

function test1() {      //호이스팅 작업이 선행 됨!!
    console.log(`---> test1`);
    
}

/**
 * ECMAScript 기준으로 let, const로 정의된 함수는 호이스팅 작업이 선행되지 않음!!!
 */

// test2();    //에러발생

//변수형 함수
let test2 = () => {   //호이스팅 작업이 선행 안됨!!
    console.log(`---> test2`);
    
}

// test3();    //에러발생

let test3 = function() {
    console.log(`---> test3`);
    
}


