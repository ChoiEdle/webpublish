import React, { useState, useEffect } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { axiosData } from '../utils/dataFetch.js';
import { cartItemsAddInfo } from '../utils/cart.js';
import '../styles/cart.css';

export function Cart({items}) {
    const [cartList, setCartList] = useState(items);
    useEffect(() => {
        const load = async() => {
            const jsonData = await axiosData("/data/products.json");
            setCartList(cartItemsAddInfo(jsonData, items));
        }
        load();
    }, []);

    const handleUpdateCartList = (cid, type) => {
        setCartList((cartList)=>
            cartList.map(item => 
                item.cid === cid ? type === '+' ? {...item, qty: item.qty + 1 } : {...item, qty: item.qty - 1 } : item
            )
        );
        // type==="-" ? setCartList(cartList.map(item => item.cid === cid ? {...item, qty:(item.qty>1 ? item.qty-1 : 1)} : item)) : setCartList(cartList.map(item => item.cid === cid ? {...item, qty:item.qty+1} : item))
    }
    
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
                                <button type='button' onClick={()=>{handleUpdateCartList(item.cid, "-")}}>-</button>
                                <input type="text" value={item.qty} readOnly/>
                                <button type='button' onClick={()=>{handleUpdateCartList(item.cid, "+")}}>+</button>
                            </div>
                            <button className='cart-remove'>
                                <RiDeleteBin6Line />
                            </button>
                        </div>

                    </div>
                )
            }
        </div>
    );
}

