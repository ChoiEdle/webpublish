import { useEffect, useState, useRef } from "react";
import { fetchKobisAPI, searchMoviePoster } from "../util/commonData.js";
import { BestProductImage } from "./shared/BestProductImage.jsx";
import { BestProductItem } from "./BestProduct.jsx";

export function Boxoffice() {
    const [list, setList] = useState([]);
    const hasRun = useRef(false);

    useEffect(() => {
        if(!hasRun.current){
            const fetchKobis = async() => {
                const kobis = await fetchKobisAPI("20250910");
                const mList = kobis.boxOfficeResult.dailyBoxOfficeList;
                // console.log(mList);
                for(const movie of mList) {
                    if(movie.rank !== '10') {   //API는 무조건 문자열
                        const poster = await searchMoviePoster(movie.movieNm, movie.openDt);
                        // console.log(poster);
                        const posterObj = {
                            "img": poster,
                            "rank": movie.rank,
                            "title": movie.movieNm,
                            "openDt": movie.openDt,
                            "audiAcc": movie.audiAcc,
                            "like": true,
                            "icon": "❤",
                            "style": {"width":"450px", "height":"600px"},
                            "icon_style": {"bg":"coral", "color":"#fff", "radius":"0", "width":"40px", "height":"40px"}
                        }
                        setList(prev => [...prev, posterObj]);    //0 - prev(현재의 list): []
                    } 
                }
            }
    
            fetchKobis();

            hasRun.current = true;
        }
        
    }, []);

    // console.log(list);    

    return (


        <div>
            <h2>박스오피스</h2>
            <ul className="best-product">
                {list.map((item, index) =>
                (index === 0) ?
                    <li key={index}><BestProductImage
                        img={item.img}
                        rank={item.rank}
                        like={item.like} 
                        icon={item.icon}
                        style={item.style}
                        icon_style={item.icon_style}/></li>
                    : 
                    <li key={index} className="best-product-sec"><BestProductItem item={item} /></li>
                )}
            </ul>
        </div>
    );
}


