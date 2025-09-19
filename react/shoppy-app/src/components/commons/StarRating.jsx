import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export function StarRating({rate, style}) {
    const totalRate = parseFloat(rate);
    const stars = [...Array(5)];
    const color = (style === "star-coral") ? "coral" : "black";

    const fillStars = Math.floor(totalRate);    //채워진 별 갯수
    const halfStar = (totalRate % 1) !== 0;     //반별 여부 체크
    const emptyStar = 5-fillStars-(halfStar ? 1 : 0); //빈별 갯수
    
    return (
        <div className='star-rating'>
            {/* fillStars : 채워진 별 추가 */}
            {[...Array(fillStars)].map((_, i) =>
                <span key={i} className={style.concat(" ", {color})}><FaStar /></span>
            )}
            {/* halfStar : 빈별 추가 */}
            { halfStar && <span key={halfStar} className={style.concat(" ", {color})}><FaStarHalfAlt /></span>}
            {/* emptyStars : 빈별 추가 */}
            {[...Array(emptyStar)].map((_, i) =>
                <span key={i} className={style.concat(" ", {color})}><FaRegStar /></span>
            )}
            {/* 별점 표시 */}
            { style === "star-coral" && <><span className={style.concat(" ", color)}>{totalRate}</span></>}
        </div>
    );
}

