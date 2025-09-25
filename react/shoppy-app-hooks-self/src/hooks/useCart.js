import { useContext } from "react";
import { CartContext } from "../context/CartContext.js";
import { axiosData } from '../utils/dataFetch.js';
import { cartItemsCheck, cartItemsAddInfo, getTotalPrice, updateCartItemsQty } from '../utils/cart.js';

/**
 * CartContext를 제어하는 함수를 가진 커스텀 훅
 */
export function useCart() {
    //CartContext의 값 가져오기
    const {setCartCount, setCartList, cartCount, cartList} = useContext(CartContext);    

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
            // setTotalPrice(getTotalPrice(jsonData, cartList));
        }
        load();
    }

    return {addCart, showCart}
}