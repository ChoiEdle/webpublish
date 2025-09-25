import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosData, groupByRows } from '../utils/dataFetch.js';
import { PiGiftThin } from 'react-icons/pi';
import { ImageList } from '../components/commons/ImageList.jsx';
import { StarRating } from '../components/commons/StarRating.jsx';
import { Detail } from '../components/detailTabs/Detail.jsx';
import { Review } from '../components/detailTabs/Review.jsx';
import { QnA } from '../components/detailTabs/QnA.jsx'
import { Return } from '../components/detailTabs/Return.jsx'
import { useCart } from '../hooks/useCart.js';

export function ProductDetail() {
    const {addCart} = useCart();
    
    const {pid} = useParams();
    const [product, setProduct] = useState({});
    const [size, setSize] = useState('XS');
    const [imgList,setImgList] = useState([]);
    const tabLabels = ['DETAIL','REVIEW','Q&A','RETURN & DELIVERY'];
    const [tabName, setTabName] = useState('detail');
    const tabEventNames = ['detail', 'review', 'qna', 'return'];

    useEffect(() => {
        const filterData = async () => {
            const jsonData = await axiosData("/data/products.json");
            const [fproduct] = await jsonData.filter((item) => item.pid === pid);      //[]준건 배열을 구조 분해 할당 한 것
            setProduct(fproduct);
            setImgList(fproduct.imgList)            
        }
        filterData();        
    }, []);   

    //쇼핑백 추가하기 함수
    const handleAddCartItem = () => {
        alert("상품이 카트에 추가되었습니다.");
        const cartItem = {
            pid : product.pid,
            size : size,
            qty: 1
        }
        addCart(cartItem);
    }

    return (
        <div className='content'>
            <div className='product-detail-top'>
                <div className='product-detail-image-top'>
                    <img src={product.image} />
                    <ImageList className="product-detail-image-top-list" imgList={imgList}/>
                </div>
                <ul className='product-detail-info-top'>
                    <li className='product-detail-title'>{product.name}</li>
                    <li className='product-detail-title'>{`${parseInt(product.price).toLocaleString()}원`}</li>
                    <li className='product-detail-subtitle'>{product.info}</li>
                    <li className='product-detail-subtitle-star'><StarRating totalRate={product && product.rate} style="star-coral" /><span>527개 리뷰 &nbsp;&nbsp; {">"} </span></li>
                    <li><p className='product-detail-box'>신규회원, 무이자할부 등</p></li>
                    <li className='flex'>
                        <button className='product-detail-button size'>사이즈</button>
                        <select className='product-detail-select2' onChange={(e)=>setSize(e.target.value)}>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </li>
                    <li className='flex'>
                        <button type='button' className='product-detail-button order'>바로 구매</button>
                        <button type='button' className='product-detail-button cart' onClick={handleAddCartItem}>쇼핑백 담기</button>
                        <button type='button' className='gift'>
                            <PiGiftThin />
                            <div className='gift-span'>선물하기</div>
                        </button>
                    </li>
                    <li>
                        <ul className='product-detail-summary-info'>
                            <li>상품 요약 정보</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className='product-detail-tab'>
                <ul className='tabs'>
                    { tabLabels && tabLabels.map((label, i)=>
                        <li className={tabName === tabEventNames[i] ? "active" : ""}>
                            <button type='button' onClick={()=>setTabName(tabEventNames[i])}>{label}</button>
                        </li>
                    )}
                </ul>

                {tabName === "detail" && <Detail imgList={imgList} info={product.detailInfo} />}
                {tabName === "review" && <Review />}
                {tabName === "qna" && <QnA />}
                {tabName === "return" && <Return />}
            </div>
            <div style={{marginBottom:"50px"}}></div>
        </div>
    );
}

