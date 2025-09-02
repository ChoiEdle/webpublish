//최초로 호출되는 함수 : window.onload(), window.addEventListener()..
window.addEventListener('DOMContentLoaded', function(){
    initForm();
})

let num = 0;

//화면 폼 함수
function initForm() {
    let output = `
    <h1>DCounter</h1>
    <div>
        <h2 id="number">${num}</h2>
        <button type="button" class="button" data-operation="increment">increment(+)</button>
        <button type="button" class="button" data-operation="decrement">decrement(-)</button>
    </div>
    `;
    document.querySelector("#content1").innerHTML = output;

    //버튼 이벤트 적용
    let buttons = document.querySelectorAll(".button");

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let type = button.dataset.operation;
            
            if(type === 'increment') {
                if(num >= 0) {
                    num++;
                }
            } else {
                if(num > 0){
                    num--;
                }
            }
            document.querySelector("#number").textContent = num;
            // console.log(number, type);
        })

        
    });
}


// //화면 폼 함수
// function initForm() {
//     let output = `
//     <h1>Test Counter</h1>
//     <div>
//         <h2 id="number">${num}</h2>
//         <button type="button" onclick="counter('increment')">increment(+)</button>
//         <button type="button" onclick="counter('decrement')">decrement(-)</button>
//     </div>
//     `;
//     document.querySelector("#content1").innerHTML = output;
// }

// //버튼 이벤트 적용
// function counter(input) {
//     if(input === 'increment') {
//         if(num >= 0){
//             ++num;   
//         }
//     } else if(input === 'decrement'){
//         if(num > 0){
//             --num;
//         }
//     }
//     document.querySelector("#number").textContent = num;
// }