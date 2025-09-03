/**
 * fetch() : 데이터(JSON, ..) 파일을 호출하여 데이터를 가져오는 함수
 */

//최초로 호출되는 함수
window.addEventListener('DOMContentLoaded', function(){
    showResult();
})

// function getJson() {
//     fetch("./data.json")
//         .then((response) => response.json())
//         .then((jsonData) => {
//             // console.log(JSON.stringify(jsonData));
//             let jsonData2 = JSON.stringify(jsonData);       //jsonData를 문자열로 만드는 함수
//             console.log(jsonData2);
            
//             let jsonData3 = JSON.parse(jsonData2);          //jsonData2를 다시 객체로 만들어주는 함수
//             console.log(jsonData3);

//             jsonData3.forEach(obj => {
//                 console.log(obj.name, obj.age, obj.job);
                
//             });
//         })
//         .catch(error => console.log(error));
// }

async function getJson() {
    let response = await fetch("./data.json");
    return response.json();
}

async function showResult() {
    //1. getJson() 결과 가져오기
    let data = await getJson();

    //2. output 변수에 html 코드 저장
    let output = `
        <table border=1>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Job</th>
            </tr>
            ${data.map((item) => `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.job}</td>
                </tr>
            `).join("")}
        </table>
    `;
    
    console.log(output);
    

    //3. innerHTML로 output 출력
    document.querySelector("#content").innerHTML = output;

}


