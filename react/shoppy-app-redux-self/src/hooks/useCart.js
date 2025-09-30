import { useContext } from "react";
import { CartContext } from "../context/CartContext.js";
import { axiosData } from '../utils/dataFetch.js';
import { cartItemsCheck, cartItemsAddInfo, getTotalPrice, updateCartItemsQty } from '../utils/cart.js';

/**
 * CartContext를 제어하는 함수를 가진 커스텀 훅
 */
export function useCart() {
    //CartContext의 값 가져오기
    const {setCartCount, setCartList, cartCount, cartList, totalPrice, setTotalPrice} = useContext(CartContext);    

    //장바구니 아이템 추가
    const addCart = (cartItem) => {
        setCartList(cartItemsCheck(cartList, cartItem));
        setCartCount(cartCount + 1);
    }

    //장바구니 출력 : 장바구니 아이템 <-- 이미지, 상품명, 상품가격 추가
    const showCart = () => {
        const load = async() => {
            const jsonData = await axiosData("/data/products.json");
            setCartList(cartItemsAddInfo(jsonData, cartList));
            setTotalPrice(getTotalPrice(jsonData, cartList));
        }
        load();
    }

    //장바구니 수량 변경
    const updateCart = (cid, type, qty, price) => {
        setCartList(cartList.map(item => item.cid === cid ? type === '+' ? {...item, qty: item.qty + 1 } : item.qty > 1 ? {...item, qty: item.qty - 1 }: item : item));
        type === "+" ? setTotalPrice(totalPrice+price) : qty>1 ? setTotalPrice(totalPrice-price) : setTotalPrice(totalPrice)
        type==="+"? setCartCount(cartCount + 1) : cartCount>1 ? setCartCount(cartCount - 1) : setCartCount(cartCount)
    }

    //장바구니 아이템 제거
    const removeCart = (cid, qty, price) => {
        setTotalPrice(totalPrice-(qty*price));
        setCartCount(cartCount-qty);
        setCartList((cartList) => 
            cartList.filter(item => !(item.cid === cid))
        );
    }
    return {addCart, showCart, updateCart, removeCart};
}