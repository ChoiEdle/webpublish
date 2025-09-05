//Dom 트리 생성(body 실행) 후 DOMContentLoaded 함수 처리
window.addEventListener('DOMContentLoaded', function(){
    createSwiper();
})

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

/**
 * KOBIS 일별 박스오피스 가져오는 함수
 */
async function getAPI(sdate) {
    let key = "708c3179e8cd07b258f317d87987956c";
    // let sdate = "20250903";
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${sdate}`;
    let response = await fetch(url);
    // console.log(response.json());
    return response.json();
}

function createSdate() {
    let today = new Date;
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDay() - 1;
    month = month<10 ? '0' + month : month;
    day = day<10 ? '0' + day : day;
    
    return `${year}${month}${day}`;
}

//Swiper 생성 함수
async function createSwiper() {
    let sdate = createSdate();
    let kobis = await getAPI(sdate);
    let kobisList = kobis.boxOfficeResult.dailyBoxOfficeList;
    let posterList = [];

    // console.log(kobisList);
    // console.log(posterList);
    
    
    //자동으로 순회하는 forEach는 비동기처리 함수를 호출할 수 없다.
    for(const movie of kobisList) {
        let poster = await searchMoviePoster(movie.movieNm, movie.openDt);
        posterList.push(poster);
    };

    let output = `
        <!-- Slider main container -->
        <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                ${posterList.map((posterUrl) => `
                    <div class="swiper-slide"><img class="swiper-img" src="${posterUrl}" alt=""></div>
                `).join("")}
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>
        
            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        
            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar-drag"></div>
        </div>
    `;

    document.querySelector("#content").innerHTML = output;

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        autoplay: {delay: 3000},
        loop: true,
      
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

}


