import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { axiosData } from '../utils/dataFetch.js';
import { cartItemsAddInfo, getTotalPrice, updateCartItemsQty } from '../utils/cart.js';
import { CartContext } from '../context/CartContext.js';
import { useCart } from '../hooks/useCart.js';
import '../styles/cart.css';

export function Cart({updateCart}) {
    const {showCart} = useCart();
    const {cartList} = useContext(CartContext);
    const navigate = useNavigate();
    // const [cartList, setCartList] = useState(items);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        // const load = async() => {
        //     const jsonData = await axiosData("/data/products.json");
        //     setCartList(cartItemsAddInfo(jsonData, items));
        //     setTotalPrice(getTotalPrice(jsonData, items));
        // }
        // load();
        showCart();
    }, []);

    //수량 업데이트 함수
    // const handleUpdateCartList = (cid, type) => {
    //     setCartList(updateCartItemsQty(cartList, cid, type));
    //     const findItem = cartList.find(item => item.cid === cid);
    //     type === "+" ? setTotalPrice(totalPrice+findItem.price) : findItem.qty>1 ? setTotalPrice(totalPrice-findItem.price) : setTotalPrice(totalPrice)

    //     updateCart(cid, type);

    //     // type==="-" ? setCartList(cartList.map(item => item.cid === cid ? {...item, qty:(item.qty>1 ? item.qty-1 : 1)} : item)) : setCartList(cartList.map(item => item.cid === cid ? {...item, qty:item.qty+1} : item))
    // }

    // const handleRemoveCartList = (cid) => {
    //     const findItem = cartList.find(cart => cart.cid === cid);
    //     setTotalPrice(totalPrice-(findItem.qty*findItem.price));
    //     setCartList((cartList) => 
    //         cartList.filter(item => !(item.cid === cid))
    //     );
    //     updateCart(cid);
    // }

    // console.log(cartList);
    
    return (
        <div className='cart-container'>
            <h2 className='cart-header'>장바구니</h2>
            {
                cartList && cartList.map(item => 
                    <div>
                        <div className='cart-item'>
                            {item.cid}
                            <img src={item.image} alt='product img' />
                            <div className='cart-item-details'>
                                <p className='cart-item-title'>{item.name}</p>
                                <p className='cart-item-title'>{item.size}</p>
                                <p className='cart-item-title'>{parseInt(item.price).toLocaleString()}원</p>
                            </div>
                            <div className='cart-quantity'>
                                {/* <button type='button' onClick={()=>{item.qty > 1 && handleUpdateCartList(item.cid, "-")}}>-</button> */}
                                <input type="text" value={item.qty} readOnly/>
                                {/* <button type='button' onClick={()=>{handleUpdateCartList(item.cid, "+")}}>+</button> */}
                            </div>
                            {/* <button className='cart-remove' onClick={()=>{handleRemoveCartList(item.cid)}}>
                                <RiDeleteBin6Line />
                            </button> */}
                        </div>

                    </div>
                )
            }
            {/* 주문 버튼 출력 */}
            {cartList && cartList.length > 0 ? 
                <>
                    <div className='cart-summary'>
                        <h3>주문 예상 금액</h3>
                        <div className='cart-summary-sub'>
                            <p className='cart-total'>
                                <label>총 상품 가격 : </label>
                                <span>{totalPrice.toLocaleString()}원</span>
                            </p>
                            <p className='cart-total'>
                                <label>총 할인 가격 : </label>
                                <span>0원</span>
                            </p>
                            <p className='cart-total'>
                                <label>총 배송비 : </label>
                                <span>0원</span>
                            </p>
                        </div>
                        <p className='cart-total2'>
                            <label>총 금액 : </label>
                            <span>{totalPrice.toLocaleString()}원</span>
                        </p>
                    </div>
                    <div className='cart-actions'>
                        <button type='button' onClick={()=>{
                            navigate("/checkout", {state: {cartList:cartList, totalPrice:totalPrice}});
                        }}>주문하기</button>
                    </div>
                </>
            : <div>
                <p> 장바구니에 담은 상품이 없습니다. &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/all">상품보러가기</Link>
                </p>
                <img style={{width:"50%", marginTop:"20px"}} src="/images/cart.jpg" />
            </div>
            }

        </div>
    );
}

