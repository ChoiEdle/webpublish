import { useEffect } from "react";
import { fetchKobisAPI, searchMoviePoster } from "../util/commonData.js";

export function Boxoffice() {
    useEffect(() => {
        const fetchKobis = async() => {
            const kobis = await fetchKobisAPI("20250910");
            const mList = kobis.boxOfficeResult.dailyBoxOfficeList;
            // console.log(mList);
            for(const movie of mList) {
                const poster = await searchMoviePoster(movie.movieNm, movie.openDt);
                console.log(poster);
                
            }
        }

        fetchKobis();
        
    }, []);

    return (
        <></>
    );
}