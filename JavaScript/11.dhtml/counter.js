//숫자 증가/감소 함수
function counter(input) {
    let number = document.querySelector("#number").textContent;
    if(input === 'increment') {
        if(number >= 0){
            document.querySelector("#number").textContent = ++number;   
        }
    } else if(input === 'decrement'){
        if(number > 0){
            document.querySelector("#number").textContent = --number;
        }
    }
}

//숫자 증가 함수
function increment() {
    // alert('increment');
    let number = document.querySelector("#number").textContent;   //form -> input
    
    //0보다 크면 1증가
    if(number >= 0){
        document.querySelector("#number").textContent = ++number;   //++number를 number + 1로하면 number는 문자열이라 +는 더하기가 아니라 접합 연산자가 되어버림
    }
    
    
}

//숫자 감소 함수
function decrement() {
    let number = document.querySelector("#number").textContent;

    if(number > 0){
        document.querySelector("#number").textContent = --number;
    }
}


