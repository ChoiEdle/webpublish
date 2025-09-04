//최초로 호출되는 함수
window.addEventListener('DOMContentLoaded', function(){
    showResult('20250101');
});

/**
 * KMDB 영화 포스터 검색
 */
async function searchMoviePoster(movieNm, openDt) {
    const key = '59H5F0U0OFQB3R2261VM';
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&title=${movieNm}&releaseDts=${openDt}`;
    url += `&ServiceKey=${key}`;

    const result = await fetch(url);
    const jsonData = await result.json();
    
    return jsonData.Data[0].Result[0].posters.split("|")[0];
}

async function getAPI(sdate) {
    let key = "708c3179e8cd07b258f317d87987956c";
    // let sdate = "20250903";
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${sdate}`;
    let response = await fetch(url);
    // console.log(response.json());
    return response.json();
}

async function showResult(sdate) {
    let kobis = await getAPI(sdate);
    let kobisobj = kobis.boxOfficeResult;
    let mlist = kobisobj.dailyBoxOfficeList;
    let posterList = [];
    for(const movie of mlist){
        let name = movie.movieNm;
        let date = movie.openDt.split("-");
        let poster = await searchMoviePoster(name,date);
        posterList.push(poster);
    }
    // console.log(posterList);
    
    // console.log(kobis.boxOfficeResult.boxofficeType);
    // console.log(kobis.boxOfficeResult.showRange);
    // console.log(kobis.boxOfficeResult.dailyBoxOfficeList);
    

    let output = `
        <div>
            <span>검색일 : </span>
            <input type="text" id="searchDate" placeholder="숫자만 입력 예)20200101"></input>
            <button type="button" id="btnSearch">검색</button>
        </div>
        <h3>타입 : ${kobisobj.boxofficeType}</h3>
        <h3>일자 : ${kobisobj.showRange}</h3>
        <div style="display:flex; gap:20px">
            <img src="${posterList[0]}" id="poster"/>
            <table border=1>
                <tr>
                    <th>순위</th>
                    <th>제목</th>
                    <th>개봉일</th>
                    <th>매출액</th>
                </tr>
                ${mlist.map((movie, index) => `
                        <tr class="movieInfo" id="${posterList[index]}">
                            <th>${movie.rank}</th>
                            <th>${movie.movieNm}</th>
                            <th>${movie.openDt}</th>
                            <th>${parseInt(movie.salesAcc).toLocaleString()}</th>
                        </tr>
                    `).join("")}
            </table>
        </div>
    `;

    document.querySelector("#content").innerHTML = output;

    //검색 버튼 이벤트
    document.querySelector("#btnSearch").addEventListener('click', () => {
        let sdate = document.querySelector("#searchDate").value.trim();
        showResult(sdate);
    });

    //
    let rows = document.querySelectorAll(".movieInfo");
    // console.log(rows);
    rows.forEach((row) => {
        row.addEventListener('mouseover', () => {
            row.style.background = 'gray';
            let imgURL = row.id;
            // console.log(row.id);
            document.querySelector("#poster").src = imgURL;
            
        });
        row.addEventListener('mouseout', () => {
            row.style.background = 'white';
        });
    });

}





