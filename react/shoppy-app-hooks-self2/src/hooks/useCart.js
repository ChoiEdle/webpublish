import { useContext } from "react";
import { CartContext } from "../Context/CartContext.js";
import { cartItemsCheck, updateCartItemsQty, cartItemsAddInfo, getTotalPrice } from '../utils/cart.js'
import { axiosData } from "../utils/dataFetch.js";

export const useCart = () => {
    const {cartList, setCartList, cartCount, setCartCount, totalPrice, setTotalPrice} = useContext(CartContext);

    const addCart = (cartItem) => {
        setCartList(cartItemsCheck(cartList, cartItem));
        setCartCount(cartCount + 1);
    }

    const showCart = () => {
        const load = async() => {
            const jsonData = await axiosData("/data/products.json");
            setCartList(cartItemsAddInfo(jsonData, cartList));
            setTotalPrice(getTotalPrice(jsonData, cartList));
        }
        load();
    }

    const updateCart = (cid, type) => {
        setCartList(updateCartItemsQty(cartList, cid, type));
        type==="+"? setCartCount(cartCount + 1) : cartCount>1 ? setCartCount(cartCount - 1) : setCartCount(cartCount)

        const findItem = cartList.find(item => item.cid === cid);
        type === "+" ? setTotalPrice(totalPrice+findItem.price) : findItem.qty>1 ? setTotalPrice(totalPrice-findItem.price) : setTotalPrice(totalPrice)
    }
    
    const removeCart = (cid) => {
        const findItem = cartList.find(cart => cart.cid === cid);
        setTotalPrice(totalPrice-(findItem.qty*findItem.price));
        setCartCount(cartCount-findItem.qty);
        setCartList((cartItems) => 
            cartItems.filter(item => !(item.cid === cid))
        );
    }

    return {addCart, showCart, updateCart, removeCart};
}